import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useRef, useState } from "react";

import PEEPO_IMAGE_URL from "@assets/full_body/peepo.webp";

import HAND_IMAGE_URL from "@assets/misc/hand.webp";
import { useContentContext } from "../../../../context/ContentProvider";

export const SmackOscarScreen = () => {
  const { advanceContent } = useContentContext();
  const [isShaking, setIsShaking] = useState(false);
  const [smackPosition, setSmackPosition] = useState<[number, number] | null>(
    null,
  );
  const [hasClicked, setHasClicked] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  const smack = (event: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = event;
    setSmackPosition([clientX, clientY]);
    setTimeout(() => {
      setSmackPosition(null);
    }, 100);
  };

  const handleClick: React.MouseEventHandler = async (event) => {
    if (hasClicked) {
      return;
    }

    setHasClicked(true);
    setIsShaking(true);
    smack(event);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => setIsShaking(false), 100);
  };

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
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <img
            src={PEEPO_IMAGE_URL}
            alt="ducko sleepo"
            style={{
              width: "100%",
              height: `auto`,
              maxWidth: "75vw",
              maxHeight: "80vh",
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
