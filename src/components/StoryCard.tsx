import Link from "next/link";

function snip(s?: string, n = 120) {
  if (!s) return "—";
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

export default function StoryCard({
  story,
  href,
  onDelete,
}: {
  story: { id: string; title: string; description?: string; createdAt?: string };
  href: string;
  onDelete: () => void;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-neutral-800
                 bg-neutral-850/60 backdrop-blur-sm p-4 sm:p-5
                 hover:border-neutral-700 hover:shadow-[0_0_0_1px_rgba(59,130,246,.25)]
                 transition"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold">{story.title}</h3>
          <p className="mt-1 text-sm text-neutral-300">{snip(story.description)}</p>
          {story.createdAt && (
            <p className="mt-1 text-xs text-neutral-400">
              {new Date(story.createdAt).toLocaleString()}
            </p>
          )}
        </div>

        <div className="flex shrink-0 gap-2">
          <Link
            href={href}
            className="px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700"
          >
            Open
          </Link>
          <button
            onClick={onDelete}
            className="px-3 py-2 rounded-lg text-red-300 hover:text-red-200 hover:bg-red-900/20"
          >
            Delete
          </button>
        </div>
      </div>

      {/* soft gradient accent on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                   transition bg-gradient-to-r from-blue-500/10 to-cyan-400/10"
      />
    </div>
  );
}
