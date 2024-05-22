import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Eye, MessageCircle } from "lucide-react";
import { Post } from "../../../types";
import Link from "next/link";

type Props = {
  post: Post;
};

export function CardDemo({ post }: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="w-[350px] aspect-square h-[100%]">
        <CardHeader>
          <Image
            src="/images/bg.jpg"
            width={400}
            height={400}
            alt={post.title}
            className="transition delay-150 duration-300 bg-card ease-in-out hover:scale-110 aspect-square rounded-lg"
          />
        </CardHeader>
        <CardContent>
          <h2 className=" text-xl font-extrabold">{post.title}</h2>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Badge>{post.category}</Badge>
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
        </CardFooter>
      </Card>
    </Link>
  );
}
