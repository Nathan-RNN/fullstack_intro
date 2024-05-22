import React from "react";

type Props = {};

export default function notFound({}: Props) {
  return (
    <div className="font-extrabold w-screen h-screen flex justify-center items-center">
      Page non trouvée
    </div>
  );
}
