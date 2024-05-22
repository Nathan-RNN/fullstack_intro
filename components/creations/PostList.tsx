import React from "react";
import { Post } from "../../../types";
import { CardDemo } from "./CardDemo";

type Props = {
  POSTS: Post[];
};

export default function PostList({ POSTS }: Props) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {POSTS.map((post: Post, idx) => (
        <span key={idx}>
          <CardDemo post={post} />
        </span>
      ))}
    </div>
  );
}
