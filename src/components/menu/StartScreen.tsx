import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  useSceneApiContext,
  useSceneStateContext,
} from "../../context/SceneProvider";
import { useEffect, useRef, useState } from "react";
import { wait } from "../../utils/wait";

const START_SCREEN_PATH = "/start_screen";

const BEFORE_IMAGE_PATH = `${START_SCREEN_PATH}/start-screen-before.webp`;
const AFTER_IMAGE_PATH = `${START_SCREEN_PATH}/start-screen-after.webp`;

export const StartScreen = () => {
  const { scene } = useSceneStateContext();
  const { setScene } = useSceneApiContext();
  const [currentImage, setCurrentImage] = useState(BEFORE_IMAGE_PATH);

  const handleClick = async () => {
    setCurrentImage(AFTER_IMAGE_PATH);
    await wait(2000);
    if (scene?.nextScene) {
      setScene(scene.nextScene);
    }
  };

  return (
    <Container
      sx={{
        backgroundColor: "#69a2be",
        width: "100%",
        height: "100%",
        padding: 0,
      }}
    >
      <Button onClick={handleClick} sx={{ width: "100%", height: "100%" }}>
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <ClickToStartText isHidden={currentImage === AFTER_IMAGE_PATH} />
          <img
            src={currentImage}
            alt="A description of the GIF"
            style={{ maxWidth: "150px", maxHeight: "150px" }}
          />
        </Stack>
      </Button>
    </Container>
  );
};

const BLINKING_TEXT_INTERVAL_MS = 1_500;
const ClickToStartText = ({ isHidden }: { isHidden: boolean }) => {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const intervalRef = useRef<number>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsDisplayed((oldVal) => !oldVal);
    }, BLINKING_TEXT_INTERVAL_MS);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Typography
      color="white"
      sx={{
        opacity: isDisplayed && !isHidden ? 1 : 0,
        textTransform: "lowercase",
      }}
    >
      Tap the screen to start
    </Typography>
  );
};
