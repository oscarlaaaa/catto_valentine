import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useEffect, useRef, useState } from "react";

import PSYDUCK_IMAGE_URL from "@assets/full_body/psyduck.webp";
import PSYDUCK_PORTRAIT_IMAGE_URL from "@assets/portraits/psyduck.webp";

import HAND_IMAGE_URL from "@assets/misc/hand.webp";
import { useContentContext } from "../../../../context/ContentProvider";
import { DialogueTextBox } from "../DialogueContent";
import { wait } from "../../../../utils/wait";

export const PatPsyduckScreen = () => {
  const { setCanAdvance, advanceContent } = useContentContext();
  const [clickCount, setClickCount] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [smacked, setSmacked] = useState(false);
  const [psyduckText, setPsyduckText] = useState<string | null>(null);
  const [smackPosition, setSmackPosition] = useState<[number, number] | null>(
    null,
  );

  const timeoutRef = useRef<number | null>(null);

  const pat = (event: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = event;
    setIsShaking(true);
    setSmackPosition([clientX, clientY]);
    setTimeout(() => {
      setSmackPosition(null);
    }, 500);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => setIsShaking(false), 100);
  };

  const smack = (event: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = event;
    setSmacked(true);
    setSmackPosition([clientX, clientY]);
    setTimeout(() => {
      setSmackPosition(null);
    }, 100);
  };

  const disableClick = clickCount === 40;

  const handleClick: React.MouseEventHandler = (event) => {
    if (disableClick) {
      return;
    }

    if (clickCount >= 39) {
      smack(event);
    } else {
      pat(event);
    }
    setClickCount((count) => count + 1);
  };

  useEffect(() => {
    if (clickCount === 5) {
      setPsyduckText("Psssyyyyy...");
    } else if (clickCount === 20) {
      setPsyduckText("Wa-wa-wa-wa-wa-wa-wa-wa-wa");
    } else if (clickCount === 40) {
      (async () => {
        await wait(2000);
        advanceContent();
      })();
    }
  }, [clickCount]);

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
        disabled={disableClick}
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
            src={PSYDUCK_IMAGE_URL}
            alt="ducko sleepo"
            style={{
              width: "350px",
              height: `auto`,
              animation: isShaking
                ? smacked
                  ? "horizontal-shaking 0.1s"
                  : "horizontal-shaking 0.5s"
                : "none",
              rotate: smacked ? "rotate(90deg)" : "none",
            }}
          />
        </Stack>
      </Button>
      {!!psyduckText && (
        <DialogueTextBox
          speaker="Psyduck"
          text={psyduckText}
          portraitImagePath={PSYDUCK_PORTRAIT_IMAGE_URL}
          onRenderComplete={() => {
            setTimeout(() => setPsyduckText(null), 2000);
          }}
          sxOverrides={{
            position: "absolute",
            bottom: 30,
            left: 0,
          }}
        />
      )}
      {!!smackPosition && (
        <img
          src={HAND_IMAGE_URL}
          alt="hand"
          style={{
            width: "200px",
            height: "100px",
            animation: "smack 0.5s",
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
