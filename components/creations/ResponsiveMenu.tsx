"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { CATEGORIES } from "../../../utils/categories";
import { Category } from "../../../types";

type Props = {};

export default function ResponsiveMenu({}: Props) {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="h-7 w-7 md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-center">
          <Link href="/write">
            <Button variant="ghost">Write a post</Button>
          </Link>
          {CATEGORIES.map((category: Category) => {
            return (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <Button variant="ghost">{category.name}</Button>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
