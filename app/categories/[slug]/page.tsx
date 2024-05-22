import PostList from "@/components/creations/PostList";
import React from "react";
import { POSTS } from "../../../../utils/posts";
import PageContainer from "@/components/creations/PageContainer";

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
  const { slug } = params;

  return (
    <PageContainer>
      <div className="py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          {slug.replace("-", " ")}
        </h2>
        <PostList POSTS={POSTS} />
      </div>
    </PageContainer>
  );
}
