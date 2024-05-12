import Link from "next/link";
import Todo from "../components/Todo";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  console.log(posts);

  const postsJSX = posts.map((post) => {
    return (
      <Link key={post.id} href={`/posts/${post.id}`} style={{ width: "70%" }}>
        <div
          style={{
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            color: "black",
            marginTop: "20px",
          }}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Posts Page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postsJSX}
      </div>

      {/* <div>
        <Todo />
      </div> */}
    </div>
  );
}
