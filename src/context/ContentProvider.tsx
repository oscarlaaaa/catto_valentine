import {
  useState,
  useContext,
  createContext,
  type PropsWithChildren,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Content, ContentId } from "../types/Scene";
import { useSceneContext } from "./SceneProvider";
import { wait } from "../utils/wait";
import { INITIAL_CONTENT_TESTING } from "../constants/scenes/test";

const ContentContext = createContext<{
  currentContent: Content | null;
  advanceContent: (nextContent?: ContentId) => Promise<void>;
  setCanAdvance: Dispatch<SetStateAction<boolean>>;
} | null>(null);

const NEW_SCENE_CONTENT_DELAY_MS = 2000;

export const ContentProvider = ({ children }: PropsWithChildren) => {
  const { scene, advanceScene } = useSceneContext();
  const [currentContentId, setCurrentContentId] = useState<ContentId | null>(
    INITIAL_CONTENT_TESTING ?? scene?.startingContentId ?? null,
  );
  const [canAdvance, setCanAdvance] = useState(true);

  const currentContentList = scene?.content ?? null;
  const currentContent =
    currentContentList && currentContentId
      ? currentContentList[currentContentId]
      : null;

  const advanceContent = async (nextContent?: ContentId) => {
    console.log({
      canAdvance,
      currentContentList,
      currentContent,
      nextContent,
    });
    if (!canAdvance) {
      return;
    }

    setCanAdvance(false);

    if (!currentContentList || !currentContent) {
      return;
    }

    if (nextContent) {
      setCurrentContentId(nextContent);
      return;
    }

    if (currentContent.type !== "decision" && currentContent.next) {
      setCurrentContentId(currentContent.next);
      return;
    }

    const nextStartingContentId = await advanceScene();
    if (nextStartingContentId) {
      await wait(NEW_SCENE_CONTENT_DELAY_MS);
      setCurrentContentId(nextStartingContentId);
    }
  };

  return (
    <ContentContext.Provider
      value={{ currentContent, advanceContent, setCanAdvance }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("SAD");
  }

  return context;
};
