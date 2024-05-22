import PageContainer from "@/components/creations/PageContainer";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <PageContainer>
      <div className="py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Login or Register
        </h2>
        <div className="flex flex-col gap-4 mx-auto max-w-sm">
          <Button>
            <Github className="mr-3" />
            Signin with Github
          </Button>
          <Button>
            <Mail className="mr-3" />
            signin with Google
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
