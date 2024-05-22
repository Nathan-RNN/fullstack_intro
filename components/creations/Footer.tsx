"use client";
import React from "react";
import PageContainer from "./PageContainer";
import { CATEGORIES } from "../../../utils/categories";
import { Category } from "../../../types";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="p-4 border-t">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-start  justify-between md:items-center">
          <h2 className="scroll-m-20 pb-2 text-3xl font-extrabold tracking-tight transition-colors first:mt-0 bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-violet-500">
            Ma blog
          </h2>
          <div className="flex flex-col gap-2 md:flex-row">
            {CATEGORIES.map((category: Category, idx) => (
              <div key={idx}>
                <Link href={`/categories/${category.slug}`}>
                  <Button variant="ghost">{category.name}</Button>
                </Link>
              </div>
            ))}
            <Link href="/write">
              <Button variant="ghost">Write a post</Button>
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
