import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { wait } from "../../../../utils/wait";
import { useBlink } from "../../../../utils/useBlink";

import BEFORE_IMAGE_URL from "@assets/start_screen/start-screen-before.webp";
import AFTER_IMAGE_URL from "@assets/start_screen/start-screen-after.webp";
import { useContentContext } from "../../../../context/ContentProvider";

export const StartScreen = () => {
  const { setCanAdvance, advanceContent } = useContentContext();
  const [currentImage, setCurrentImage] = useState(BEFORE_IMAGE_URL);
  const [hasClicked, setHasClicked] = useState(false);

  const handleClick = async () => {
    if (hasClicked) {
      return;
    }

    setCanAdvance(true);
    setHasClicked(true);
    setCurrentImage(AFTER_IMAGE_URL);
    await wait(2000);
    advanceContent();
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
      <Button
        onClick={handleClick}
        disabled={hasClicked}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Typography variant="h4" color="white" textTransform="lowercase">
            catto's valentine
          </Typography>
          <img
            src={currentImage}
            alt="ducko sleepo"
            style={{ maxWidth: "150px", maxHeight: "150px" }}
          />
          <ClickToStartText isHidden={currentImage === AFTER_IMAGE_URL} />
        </Stack>
      </Button>
    </Container>
  );
};

const BLINKING_TEXT_INTERVAL_MS = 1_500;
const ClickToStartText = ({ isHidden }: { isHidden: boolean }) => {
  const { isDisplayed } = useBlink({
    disabled: isHidden,
    intervalMs: BLINKING_TEXT_INTERVAL_MS,
  });

  return (
    <Typography
      color="white"
      sx={{
        opacity: isDisplayed ? 1 : 0,
        textTransform: "lowercase",
      }}
    >
      Tap the screen to start
    </Typography>
  );
};
