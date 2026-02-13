import Box from "@mui/material/Box";
import { useSceneStateContext } from "../../context/SceneProvider";
import { useState, type PropsWithChildren } from "react";
import type { Scene } from "../../types/Scene";
import { Container } from "@mui/material";
import { StartScreen } from "../menu/StartScreen";
import { wait } from "../../utils/wait";

const TRANSITION_TIME_MS = 2000;
const TRANSITION_TIME_S = TRANSITION_TIME_MS / 1000;

export const SceneContainer = ({ children }: PropsWithChildren) => {
  const { scene } = useSceneStateContext();
  const [currentScene, setCurrentScene] = useState<Scene | null>(() => scene);
  const [showBlackScreen, setShowBlackScreen] = useState(false);

  const updateScene = async (scene: Scene | null) => {
    setShowBlackScreen(true);
    await wait(TRANSITION_TIME_MS);
    setCurrentScene(scene);
    setShowBlackScreen(false);
  };

  if (scene !== currentScene && !showBlackScreen) {
    updateScene(scene);
  }

  const gameStarted = !!currentScene?.backgroundImagePath;

  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        padding: 0,
      }}
      style={
        gameStarted
          ? {
              backgroundImage: `url('${currentScene.backgroundImagePath}')`,
              backgroundSize: "cover",
            }
          : {
              backgroundColor: "#69a2be",
            }
      }
    >
      {gameStarted ? children : <StartScreen />}
      <BlackScreen showBlackScreen={showBlackScreen} />
    </Container>
  );
};

const BlackScreen = ({ showBlackScreen }: { showBlackScreen: boolean }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const transitionOut = async () => {
    await wait(TRANSITION_TIME_MS);
    setIsDisplayed(false);
  };

  if (showBlackScreen && !isDisplayed) {
    setIsDisplayed(true);
  }

  if (!showBlackScreen && isDisplayed) {
    transitionOut();
  }

  return (
    <Box
      left={0}
      top={0}
      position="absolute"
      width={isDisplayed ? "100%" : "0px"}
      height={isDisplayed ? "100%" : "0px"}
      sx={{
        backgroundColor: "black",
        zIndex: showBlackScreen ? 10000 : 0,
        opacity: showBlackScreen ? 1 : 0,
        transition: `opacity ${TRANSITION_TIME_S}s ease-in-out`,
      }}
    />
  );
};
