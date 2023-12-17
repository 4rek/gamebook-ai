"use client";

import Scene from "@/components/Scene";
import { useState } from "react";

const scenes: Scene[] = [
  {
    id: 0,
    description: "You are in a dark room. There is a door to the north.",
    options: [
      {
        label: "Go north",
        nextSceneId: 1,
      },
      {
        label: "Go south",
        nextSceneId: 0,
      },
    ],
  },
  {
    id: 1,
    description: "You are in a bright room. There is a door to the south.",
    options: [
      {
        label: "Go south",
        nextSceneId: 0,
      },
      {
        label: "Go north",
        nextSceneId: 1,
      },
    ],
  },
];

export default function PlayPage() {
  const [sceneId, setSceneId] = useState(0);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Gamebook AI
          </h1>
          <Scene
            scene={scenes[sceneId]}
            onSceneChange={(id) => setSceneId(id)}
          />
        </div>
      </div>
    </div>
  );
}
