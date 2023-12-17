interface SceneOption {
  nextSceneId: Scene["id"];
  label: string;
}

interface Scene {
  id: number;
  description: string;
  options: SceneOption[];
}
