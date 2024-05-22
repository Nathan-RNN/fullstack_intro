"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

export default function ProfileButton({}: Props) {
  return (
    <Link href="/login">
      <Button>Login</Button>
    </Link>
  );
}
