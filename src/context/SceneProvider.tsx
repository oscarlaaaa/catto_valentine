import {
  useState,
  useContext,
  createContext,
  type PropsWithChildren,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Scene } from "../types/Scene";
import { START_SCENE } from "../constants/scenes";

const SceneStateContext = createContext<{
  scene: Scene | null;
} | null>(null);

const SceneApiContext = createContext<{
  setScene: Dispatch<SetStateAction<Scene>>;
} | null>(null);

export const SceneProvider = ({ children }: PropsWithChildren) => {
  const [scene, setScene] = useState<Scene>(START_SCENE);

  return (
    <SceneStateContext.Provider value={{ scene }}>
      <SceneApiContext.Provider value={{ setScene }}>
        {children}
      </SceneApiContext.Provider>
    </SceneStateContext.Provider>
  );
};

export const useSceneStateContext = () => {
  const context = useContext(SceneStateContext);
  if (!context) {
    throw new Error("SAD");
  }

  return context;
};

export const useSceneApiContext = () => {
  const context = useContext(SceneApiContext);
  if (!context) {
    throw new Error("SAD");
  }

  return context;
};
