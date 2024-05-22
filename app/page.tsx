import PageContainer from "@/components/creations/PageContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CATEGORIES } from "../../utils/categories";
import { Category } from "../../types";
import { POSTS } from "./../../utils/posts";
import PostList from "@/components/creations/PostList";

export default function Home() {
  return (
    <PageContainer>
      <div className="py-8 px-4">
        <div
          style={{ backgroundImage: "url(/images/bg.jpg)" }}
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        >
          <div className="w-full h-full flex flex-col justify-center gap-3 items-center">
            <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-lg">
              <h2 className="text-center font-bold text-3xl md:5xl text-black dark:text-white">
                Become A Better React Developer
              </h2>
              <Input
                type="email"
                placeholder="Email"
                className="dark:bg-white"
              />
              <Button size="lg" className="w-full py-6 text-xl mt-4">
                Suscribe to our Newslettre
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {CATEGORIES.map((category: Category, idx) => (
          <Link href={`/categories/${category.slug}`} key={idx}>
            <Button variant="outline">{category.name}</Button>
          </Link>
        ))}
      </div>

      <PostList POSTS={POSTS} />
    </PageContainer>
  );
}
