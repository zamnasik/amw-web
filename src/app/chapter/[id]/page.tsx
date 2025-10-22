"use client";

import { Amplify } from "aws-amplify";
// @ts-ignore – your file is JS
import awsExports from "../../../aws-exports.js";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

Amplify.configure(awsExports, { ssr: true });
const client = generateClient();

const GET_CHAPTER = /* GraphQL */ `
  query GetChapter($id: ID!) {
    getChapter(id: $id) { id title storyID }
  }
`;

const LIST_MOMENTS_FOR_CHAPTER = /* GraphQL */ `
  query ListMomentsForChapter($chapterID: ID!, $limit: Int, $nextToken: String) {
    listMoments(
      filter: { chapterID: { eq: $chapterID } }
      limit: $limit
      nextToken: $nextToken
    ) {
      items { id title chapterID createdAt }
      nextToken
    }
  }
`;

const CREATE_MOMENT = /* GraphQL */ `
  mutation CreateMoment($input: CreateMomentInput!) {
    createMoment(input: $input) { id title chapterID createdAt }
  }
`;

const DELETE_MOMENT = /* GraphQL */ `
  mutation DeleteMoment($input: DeleteMomentInput!) {
    deleteMoment(input: $input) { id }
  }
`;

export default function ChapterPage() {
  return (
    <Authenticator>
      <MomentsAuthed />
    </Authenticator>
  );
}

function MomentsAuthed() {
  const { user } = useAuthenticator((c) => [c.user]);
  const params = useParams<{ id: string }>();
  const chapterID = params?.id as string;

  const [chapter, setChapter] = useState<any>(null);
  const [moments, setMoments] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    if (!user || !chapterID) return;

    try {
      const cres: any = await client.graphql({
        query: GET_CHAPTER,
        variables: { id: chapterID },
        authMode: "userPool",
      });
      setChapter(cres?.data?.getChapter ?? null);

      const mres: any = await client.graphql({
        query: LIST_MOMENTS_FOR_CHAPTER,
        variables: { chapterID, limit: 200 },
        authMode: "userPool",
      });
      setMoments(mres?.data?.listMoments?.items ?? []);
      setError(null);
    } catch (e: any) {
      console.error(e);
      setError(e?.errors?.[0]?.message ?? "Failed to load");
    }
  }

  async function addMoment() {
    if (!title.trim() || !chapterID) return;
    try {
      setLoading(true);
      await client.graphql({
        query: CREATE_MOMENT,
        variables: { input: { title: title.trim(), chapterID } },
        authMode: "userPool",
      });
      setTitle("");
      await load();
    } finally {
      setLoading(false);
    }
  }

  async function deleteMoment(id: string) {
    await client.graphql({
      query: DELETE_MOMENT,
      variables: { input: { id } },
      authMode: "userPool",
    });
    await load();
  }

  useEffect(() => { load(); }, [user?.userId, chapterID]);

  if (!chapterID) return null;

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            {chapter ? `Moments — ${chapter.title}` : "Moments"}
          </h1>
          <div className="flex gap-2">
            <Link href={`/story/${chapter?.storyID ?? ""}`} className="px-3 py-2 bg-neutral-800 rounded hover:bg-neutral-700">
              ← Back to Chapters
            </Link>
            <Link href="/" className="px-3 py-2 bg-neutral-800 rounded hover:bg-neutral-700">
              Home
            </Link>
          </div>
        </div>

        {/* Add moment */}
        <div className="flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New moment title"
            className="flex-1 px-3 py-2 rounded
                       bg-neutral-800 text-white caret-white
                       placeholder:text-neutral-400
                       border border-neutral-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addMoment}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>

        {error && <p className="text-red-400">{error}</p>}

        {/* List moments */}
        <ul className="space-y-3">
          {moments.map((m) => (
            <li key={m.id} className="flex items-center justify-between bg-neutral-800 rounded p-3">
              <div className="font-medium">{m.title}</div>
              <button
                onClick={() => deleteMoment(m.id)}
                className="text-red-400 hover:text-red-300"
              >
                Delete
              </button>
            </li>
          ))}
          {moments.length === 0 && <li className="opacity-70">No moments yet. Add one above.</li>}
        </ul>
      </div>
    </main>
  );
}
