"use client";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

type Props = {};

export default function ToggleTheme({}: Props) {
  const { theme, setTheme } = useTheme();

  const handleToggle = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button size="icon" variant="ghost" onClick={handleToggle}>
      <Moon className="w-7 h-7 scale-100 dark:scale-0" />
      <Sun className="w-7 h-7 scale-0 dark:scale-100" />
    </Button>
  );
}
