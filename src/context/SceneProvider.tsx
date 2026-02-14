import {
  useState,
  useContext,
  createContext,
  type PropsWithChildren,
  useCallback,
} from "react";
import type { ContentId, Scene } from "../types/Scene";
import { START_SCENE } from "../constants/scenes/0_start_scene";
import { wait } from "../utils/wait";
import { INITIAL_SCENE_TESTING } from "../constants/scenes/test";

const SceneContext = createContext<{
  scene: Scene | null;
  showBlackScreen: boolean;
  advanceScene: () => Promise<ContentId | undefined>;
} | null>(null);

const TRANSITION_TIME_MS = 2000;

export const SceneProvider = ({ children }: PropsWithChildren) => {
  const [scene, setScene] = useState<Scene | null>(
    INITIAL_SCENE_TESTING ?? START_SCENE,
  );
  const [showBlackScreen, setShowBlackScreen] = useState(false);

  const advanceScene = useCallback(async () => {
    if (!scene?.nextScene) {
      return;
    }

    setShowBlackScreen(true);

    await wait(TRANSITION_TIME_MS);
    setScene(scene.nextScene);

    setShowBlackScreen(false);

    return scene.nextScene.startingContentId;
  }, [scene, setScene]);

  return (
    <SceneContext.Provider value={{ scene, advanceScene, showBlackScreen }}>
      {children}
    </SceneContext.Provider>
  );
};

export const useSceneContext = () => {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error("SAD");
  }

  return context;
};
