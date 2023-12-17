"use client";

import Link from "next/link";

interface SceneProps {
  scene: Scene;
  onSceneChange: (sceneId: number) => void;
}

export default function Scene({ scene, onSceneChange }: SceneProps) {
  return (
    <div>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {scene.description}
      </p>

      <div className="mt-12 flex items-center justify-center gap-x-6">
        {scene.options.map((option) => (
          <button
            key={option.label}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => onSceneChange(option.nextSceneId)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Start from the beginning
        </Link>
      </div>
    </div>
  );
}
