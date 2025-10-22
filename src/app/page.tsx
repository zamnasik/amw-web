"use client";

import { Amplify } from "aws-amplify";
// @ts-ignore – your exports file is JS
import awsExports from "../aws-exports.js";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import Link from "next/link";


Amplify.configure(awsExports, { ssr: true });
const client = generateClient();

const LIST_STORIES = /* GraphQL */ `
  query ListStories($limit: Int, $nextToken: String) {
    listStories(limit: $limit, nextToken: $nextToken) {
      items { id title description createdAt }
      nextToken
    }
  }
`;

const CREATE_STORY = /* GraphQL */ `
  mutation CreateStory($input: CreateStoryInput!) {
    createStory(input: $input) { id title createdAt }
  }
`;

const DELETE_STORY = /* GraphQL */ `
  mutation DeleteStory($input: DeleteStoryInput!) {
    deleteStory(input: $input) { id }
  }
`;

function AppAuthed() {
  const { user } = useAuthenticator((c) => [c.user]);

  const [stories, setStories] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    if (!user) return;
    try {
      const res: any = await client.graphql({
        query: LIST_STORIES,
        variables: { limit: 50 },
        authMode: "userPool",
      });
      setStories(res?.data?.listStories?.items ?? []);
      setError(null);
    } catch (e: any) {
      console.error(e);
      setError(e?.errors?.[0]?.message ?? "Failed to load stories");
    }
  }

  async function add() {
    if (!user || !title.trim()) return;
    try {
      setLoading(true);
      await client.graphql({
        query: CREATE_STORY,
        variables: { input: { title: title.trim() } },
        authMode: "userPool",
      });
      setTitle("");
      await refresh();
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: string) {
    if (!user) return;
    await client.graphql({
      query: DELETE_STORY,
      variables: { input: { id } },
      authMode: "userPool",
    });
    await refresh();
  }

  useEffect(() => { refresh(); }, [user?.userId]);

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            Welcome {user?.username} — Stories
          </h1>
        </header>

        <div className="flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New story title"
            className="flex-1 px-3 py-2 rounded
             bg-neutral-800 text-white caret-white
             placeholder:text-neutral-400
             border border-neutral-700
             focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={add}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>

        {error && <p className="text-red-400">{error}</p>}

        <ul className="space-y-3">
  {stories.map((s) => (
    <li key={s.id} className="flex items-center justify-between bg-neutral-800 rounded p-3">
      <div>
        {/* click the title to go to the Chapters page */}
        <Link
          href={`/story/${s.id}`}
          className="font-medium hover:underline"
        >
          {s.title}
        </Link>
        <div className="text-sm opacity-75">{s.description ?? "—"}</div>
      </div>

      <div className="flex items-center gap-3">
        {/* optional helper button */}
        <Link
          href={`/story/${s.id}`}
          className="text-blue-400 hover:text-blue-300"
        >
          Open
        </Link>

        <button
          onClick={() => remove(s.id)}
          className="text-red-400 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </li>
  ))}
  {stories.length === 0 && <li className="opacity-70">No stories yet. Add one above.</li>}
</ul>

      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <AppAuthed />
          <div className="fixed top-4 right-4">
            <button
              onClick={signOut}
              className="px-3 py-2 bg-red-600 rounded hover:bg-red-700 text-white"
            >
              Sign out
            </button>
          </div>
        </>
      )}
    </Authenticator>
  );
}
