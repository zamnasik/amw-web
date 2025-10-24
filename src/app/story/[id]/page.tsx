"use client";


import { Amplify } from "aws-amplify";
// @ts-ignore
import awsExports from "../../../aws-exports.js";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

Amplify.configure(awsExports, { ssr: true });
const client = generateClient();

const GET_STORY = /* GraphQL */ `
  query GetStory($id: ID!) {
  getStory(id: $id) {
    id
    title
    content       # ✅
    createdAt
  }
}
`;

const LIST_CHAPTERS_FOR_STORY = /* GraphQL */ `
  query ListChaptersForStory($storyID: ID!, $limit: Int, $nextToken: String) {
    listChapters(
      filter: { storyID: { eq: $storyID } }
      limit: $limit
      nextToken: $nextToken
    ) {
      items { id title storyID createdAt }
      nextToken
    }
  }
`;

const CREATE_CHAPTER = /* GraphQL */ `
  mutation CreateChapter($input: CreateChapterInput!) {
    createChapter(input: $input) { id title storyID createdAt }
  }
`;

const DELETE_CHAPTER = /* GraphQL */ `
  mutation DeleteChapter($input: DeleteChapterInput!) {
    deleteChapter(input: $input) { id }
  }
`;

export default function StoryPage() {
  return (
    <Authenticator>
      <ChaptersAuthed />
    </Authenticator>
  );
}

function ChaptersAuthed() {
  const { user } = useAuthenticator((c) => [c.user]);
  const params = useParams<{ id: string }>();
  const storyID = params?.id as string;

  const [story, setStory] = useState<any>(null);
  const [chapters, setChapters] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    if (!user || !storyID) return;

    try {
      const sres: any = await client.graphql({
        query: GET_STORY,
        variables: { id: storyID },
        authMode: "userPool",
      });
      setStory(sres?.data?.getStory ?? null);

      const cres: any = await client.graphql({
        query: LIST_CHAPTERS_FOR_STORY,
        variables: { storyID, limit: 100 },
        authMode: "userPool",
      });
      setChapters(cres?.data?.listChapters?.items ?? []);
      setError(null);
    } catch (e: any) {
      console.error(e);
      setError(e?.errors?.[0]?.message ?? "Failed to load");
    }
  }

  async function addChapter() {
    if (!title.trim() || !storyID) return;
    try {
      setLoading(true);
      await client.graphql({
        query: CREATE_CHAPTER,
        variables: { input: { title: title.trim(), storyID } },
        authMode: "userPool",
      });
      setTitle("");
      await load();
    } finally {
      setLoading(false);
    }
  }

  async function deleteChapter(id: string) {
    await client.graphql({
      query: DELETE_CHAPTER,
      variables: { input: { id } },
      authMode: "userPool",
    });
    await load();
  }

  useEffect(() => { load(); }, [user?.userId, storyID]);

  if (!storyID) return null;

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            {story ? `Chapters — ${story.title}` : "Chapters"}
          </h1>
          <Link href="/" className="px-3 py-2 bg-neutral-800 rounded hover:bg-neutral-700">
            ← Back to Stories
          </Link>
        </div>

        {/* Add chapter */}
        <div className="flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New chapter title"
            className="flex-1 px-3 py-2 rounded
                       bg-neutral-800 text-white caret-white
                       placeholder:text-neutral-400
                       border border-neutral-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addChapter}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>

        {error && <p className="text-red-400">{error}</p>}

        {/* List chapters */}
        <ul className="space-y-3">
          {chapters.map((c) => (
            <li key={c.id} className="flex items-center justify-between bg-neutral-800 rounded p-3">
              <Link
  href={`/chapter/${c.id}`}
  className="font-medium hover:underline"
>
  {c.title}
</Link>
              <button
                onClick={() => deleteChapter(c.id)}
                className="text-red-400 hover:text-red-300"
              >
                Delete
              </button>
            </li>
          ))}
          {chapters.length === 0 && <li className="opacity-70">No chapters yet. Add one above.</li>}
        </ul>
      </div>
    </main>
  );
}
