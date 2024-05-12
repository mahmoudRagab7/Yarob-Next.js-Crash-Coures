export default async function PostDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const posts = await response.json();

  return (
    <div>
      <div
        style={{
          width: "100%",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          color: "black",
          marginTop: "20px",
        }}
      >
        <h2>{posts.title}</h2>
        <hr style={{ margin: "20px" }} />
        <p>{posts.body}</p>
      </div>
    </div>
  );
}
