"use client";

import { Amplify } from "aws-amplify";
// @ts-ignore
import awsExports from "./aws-exports.js";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import StoryCard from "@/components/StoryCard";

Amplify.configure(awsExports, { ssr: true });
const client = generateClient();

const LIST_STORIES = /* GraphQL */ `
  query ListStories {
    listStories(limit: 200) { items { id title description createdAt } }
  }
`;
const CREATE_STORY = /* GraphQL */ `
  mutation CreateStory($input: CreateStoryInput!) {
    createStory(input: $input) { id }
  }
`;
const DELETE_STORY = /* GraphQL */ `
  mutation DeleteStory($input: DeleteStoryInput!) { deleteStory(input:$input){ id } }
`;

export default function HomePage() {
  return (
    <Authenticator>
      <Authed />
    </Authenticator>
  );
}

function displayNameFromUser(user: any) {
  const a = user?.attributes ?? {};
  const emailName = (a.email ?? user?.username ?? "").split("@")[0];
  return (
    a.preferred_username ||
    a.given_name ||
    a.name ||
    (emailName ? emailName.replace(/\W+/g, " ") : "there")
  );
}

function Authed() {
  const { user, signOut } = useAuthenticator();
  const [stories, setStories] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      const res: any = await client.graphql({ query: LIST_STORIES, authMode: "userPool" });
      setStories((res?.data?.listStories?.items ?? []).sort(
        (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ));
      setError(null);
    } catch (e: any) {
      console.error(e);
      setError(e?.errors?.[0]?.message ?? "Failed to load");
    }
  }

  async function add() {
    if (!title.trim()) return;
    setLoading(true);
    try {
      await client.graphql({
        query: CREATE_STORY,
        variables: { input: { title: title.trim() } },
        authMode: "userPool",
      });
      setTitle("");
      await load();
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: string) {
    await client.graphql({
      query: DELETE_STORY,
      variables: { input: { id } },
      authMode: "userPool",
    });
    await load();
  }

  useEffect(() => { load(); }, [user?.userId]);

  const niceName = displayNameFromUser(user);

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Friendly welcome */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Welcome, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              {niceName}
            </span> — <span className="opacity-80">Stories</span>
          </h1>
          <button
            onClick={signOut}
            className="px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700"
          >
            Sign out
          </button>
        </div>

        {/* Add story input */}
        <div className="flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New story title"
            className="flex-1 px-4 py-3 rounded-xl bg-neutral-800 text-white border border-neutral-700
                       placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={add}
            disabled={loading}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Adding…" : "Add"}
          </button>
        </div>

        {error && <p className="text-red-400">{error}</p>}

        {/* Stories as pretty cards */}
        <div className="grid gap-4">
          {stories.map((s) => (
            <StoryCard
              key={s.id}
              story={s}
              onDelete={() => remove(s.id)}
              href={`/story/${s.id}`}
            />
          ))}
          {stories.length === 0 && (
            <div className="opacity-70">No stories yet. Add one above.</div>
          )}
        </div>
      </div>
    </main>
  );
}
