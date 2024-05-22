"use client";
import React from "react";
import PageContainer from "./PageContainer";
import { NavigationMenuDemo } from "./NavigationMenu";
import ProfileButton from "./ProfileButton";
import ResponsiveMenu from "./ResponsiveMenu";
import ToggleTheme from "./ToggleTheme";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="p-4 border-b-2">
      <PageContainer>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            <ResponsiveMenu />
            <h2 className="scroll-m-20 pb-2 text-3xl font-extrabold tracking-tight transition-colors first:mt-0 bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-violet-500">
              Ma blog
            </h2>
          </div>
          <NavigationMenuDemo />
          <div className="flex items-center gap-2">
            <ToggleTheme />
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
