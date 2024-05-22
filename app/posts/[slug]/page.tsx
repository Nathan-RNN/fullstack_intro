import PageContainer from "@/components/creations/PageContainer";
import React from "react";
import { Post } from "../../../../types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: {
    slug: string;
  };
};

export default function post({ params }: Props) {
  const post: Post = {
    id: 1,
    category: "React",
    title: "React State Management: Choosing the Right Solution",
    image: "/react-state-management.jpg",
    caption:
      "Explore different state management solutions in React and choose the one that fits your needs.",
    date: "2023-01-15",
    minutesToRead: 10,
    author: "John ReactDev",
    nbViews: 25,
    nbComments: 8,
    slug: "react-state-management-choosing-right-solution",
    content: "Hello cher developpeur!!!",
  };
  return (
    <PageContainer>
      <div className="p-8">
        <div
          style={{ backgroundImage: "url(/images/bg.jpg)" }}
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        >
          <div className="w-full h-full flex flex-col justify-center gap-3 items-center">
            <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-lg">
              <h2 className="text-center font-bold text-3xl md:5xl text-black dark:text-white">
                {post.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>JR</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h6 className="font-medium">{post.author}</h6>
              <p className="text-sm opacity-20">
                Posted on {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="flex">
              <MessageCircle />
              {post.nbComments}
            </span>
            <span className="flex">
              <Eye />
              {post.nbViews}
            </span>
          </div>
        </div>
        <Separator />
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: post.content as string,
          }}
        />
      </div>
    </PageContainer>
  );
}
