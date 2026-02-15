import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useEffect, useRef, useState } from "react";

import PSYDUCK_IMAGE_URL from "@assets/full_body/psyduck.webp";
import PSYDUCK_PORTRAIT_IMAGE_URL from "@assets/portraits/psyduck.webp";

import HAND_IMAGE_URL from "@assets/misc/hand.webp";
import POW_IMAGE_URL from "@assets/misc/pow.webp";
import { useContentContext } from "../../../../context/ContentProvider";
import { DialogueTextBox } from "../DialogueContent";
import { wait } from "../../../../utils/wait";

export const PatPsyduckScreen = () => {
  const { setCanAdvance, advanceContent } = useContentContext();
  const [clickCount, setClickCount] = useState(19);
  const [isShaking, setIsShaking] = useState(false);
  const [smacked, setSmacked] = useState(false);
  const [psyduckText, setPsyduckText] = useState<string | null>(null);
  const [smackPosition, setSmackPosition] = useState<[number, number] | null>(
    null,
  );

  const timeoutRef = useRef<number | null>(null);

  const pat = (event: { clientX: number; clientY: number }) => {
    if (isShaking) {
      return;
    }

    const { clientX, clientY } = event;
    setIsShaking(true);
    setSmackPosition([clientX, clientY]);
    setTimeout(() => {
      setSmackPosition(null);
    }, 500);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => setIsShaking(false), 500);
  };

  const smack = (event: { clientX: number; clientY: number }) => {
    if (smacked) {
      return;
    }

    const { clientX, clientY } = event;
    setSmacked(true);
    setSmackPosition([clientX, clientY]);
    setTimeout(() => {
      setSmackPosition(null);
    }, 300);
  };

  const disableClick = clickCount === 20;

  const handleClick: React.MouseEventHandler = (event) => {
    if (disableClick) {
      return;
    }

    if (clickCount >= 19) {
      smack(event);
    } else {
      pat(event);
    }
    setClickCount((count) => count + 1);
  };

  useEffect(() => {
    if (clickCount === 5) {
      setPsyduckText("Psssyyyyy...");
    } else if (clickCount === 15) {
      setPsyduckText("Wa-wa-wa-wa-wa-wa-wa-wa-wa");
    } else if (clickCount === 20) {
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
        maxWidth: "500px",
        maxHeight: "1000px",
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
              width: smacked ? "auto" : "350px",
              height: smacked ? "100vw" : `auto`,
              animationName: smacked ? "toppled" : !isShaking ? "" : "wiggle",
              animationDuration: smacked ? "0.3s" : !isShaking ? "" : "0.5s",
              animationIterationCount: smacked
                ? "1"
                : !isShaking
                  ? "none"
                  : "infinite",
              animationFillMode: smacked ? "forwards" : "none",
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
        <>
          <img
            src={HAND_IMAGE_URL}
            alt="hand"
            style={{
              width: "200px",
              height: "100px",
              animation: smacked ? "smack 0.1s" : "smack 0.5s",
              position: "absolute",
              top: smackPosition[1] - 50,
              left: smackPosition[0] / 2,
              rotate: `${getRandomNumber(-45, 45)}deg`,
              zIndex: 10000,
            }}
          />
          {smacked && (
            <img
              src={POW_IMAGE_URL}
              alt="hand"
              style={{
                width: "250px",
                height: "125px",
                animation: "fade-in 0.1s",
                position: "absolute",
                top: smackPosition[1],
                left: smackPosition[0] / 2,
              }}
            />
          )}
        </>
      )}
    </Container>
  );
};

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
