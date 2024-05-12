import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
import LoadingPostDetails from "./loading";

export default async function PostDetailsPage({ params }) {
  //   console.log(`-------------------${params.postid}`);
  const postId = params.postid;

  return (
    <div style={{ height: "100vh", padding: "20px" }}>
      <h1>Post Details</h1>

      <Suspense fallback={<LoadingPostDetails />}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
