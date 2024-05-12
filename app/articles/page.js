import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div>
      <h1>Articles</h1>
      {/* href --> folder name */}
      <Link href={"/posts"}>
        <button>Take me to posts page</button>
      </Link>
    </div>
  );
}
