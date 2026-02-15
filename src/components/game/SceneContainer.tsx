import Box from "@mui/material/Box";
import { useSceneContext } from "../../context/SceneProvider";
import { useState, type PropsWithChildren } from "react";
import { Container } from "@mui/material";
import { wait } from "../../utils/wait";

const TRANSITION_TIME_MS = 2000;
const TRANSITION_TIME_S = TRANSITION_TIME_MS / 1000;

export const SceneContainer = ({ children }: PropsWithChildren) => {
  const { scene, showBlackScreen } = useSceneContext();

  const hasBackground = !!scene?.backgroundImagePath;

  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        maxHeight: "1000px",
        padding: 0,
      }}
      style={
        hasBackground
          ? {
              backgroundImage: `url('${scene.backgroundImagePath}')`,
              backgroundSize: "cover",
            }
          : {}
      }
    >
      {children}
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
      maxWidth="500px"
      maxHeight="1000px"
      sx={{
        backgroundColor: "black",
        zIndex: showBlackScreen ? 10000 : 0,
        opacity: showBlackScreen ? 1 : 0,
        transition: `opacity ${TRANSITION_TIME_S}s ease-in-out`,
      }}
    />
  );
};
