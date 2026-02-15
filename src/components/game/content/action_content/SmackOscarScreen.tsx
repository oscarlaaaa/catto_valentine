import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

import { CHARACTERS } from "../../../../constants/characters";

import HAND_IMAGE_URL from "@assets/misc/hand.webp";
import { useContentContext } from "../../../../context/ContentProvider";

export const SmackOscarScreen = () => {
  const { advanceContent, setCanAdvance } = useContentContext();
  const [isShaking, setIsShaking] = useState(false);
  const [smackPosition, setSmackPosition] = useState<[number, number] | null>(
    null,
  );
  const [hasClicked, setHasClicked] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>(
    CHARACTERS.Oscar.images.full.normal,
  );

  const smack = (event: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = event;

    setSmackPosition([clientX, clientY]);
    setIsShaking(true);
    setTimeout(() => {
      setSmackPosition(null);
      setIsShaking(false);
    }, 100);
  };

  const handleClick: React.MouseEventHandler = async (event) => {
    if (hasClicked) {
      return;
    }

    setHasClicked(true);
    smack(event);
    setCurrentImage(CHARACTERS.Oscar.images.full.hit);

    setTimeout(() => {
      setCurrentImage(CHARACTERS.Oscar.images.full.dead);
    }, 1000);

    setTimeout(() => {
      setCurrentImage(CHARACTERS.Oscar.images.full.crouch);
    }, 3000);

    setTimeout(() => {
      advanceContent();
    }, 4000);
  };

  useEffect(() => {
    setCanAdvance(true);
  }, []);

  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        padding: 0,
      }}
    >
      <Button
        disabled={hasClicked}
        onClick={handleClick}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack
          width="100%"
          height="auto"
          minHeight="75vh"
          alignItems="center"
          gap={2}
          direction="column-reverse"
        >
          <img
            src={currentImage}
            alt="ducko sleepo"
            style={{
              width: "50%",
              height: `auto`,
              animation: isShaking ? "horizontal-shaking 0.2s" : "none",
            }}
          />
        </Stack>
      </Button>
      {!!smackPosition && (
        <img
          src={HAND_IMAGE_URL}
          alt="hand"
          style={{
            width: "200px",
            height: "100px",
            animation: "smack 0.1s",
            position: "absolute",
            top: smackPosition[1] - 50,
            left: smackPosition[0] / 2,
            rotate: `${getRandomNumber(-45, 45)}deg`,
          }}
        />
      )}
    </Container>
  );
};

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
