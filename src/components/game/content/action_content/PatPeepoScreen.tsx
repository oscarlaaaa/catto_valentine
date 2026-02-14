import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useEffect, useRef, useState } from "react";

import PEEPO_IMAGE_URL from "@assets/full_body/peepo.webp";
import PEEPO_PORTRAIT_IMAGE_URL from "@assets/portraits/peepo.webp";

import PEEPO_CRY_IMAGE_URL from "@assets/full_body/peepo-cry.webp";
import PEEPO_CRY_PORTRAIT_IMAGE_URL from "@assets/portraits/peepo-cry.webp";

import HAND_IMAGE_URL from "@assets/misc/hand.webp";
import { useContentContext } from "../../../../context/ContentProvider";
import { DialogueTextBox } from "../DialogueContent";
import { Avatar, Card, CardHeader, Collapse } from "@mui/material";
import { wait } from "../../../../utils/wait";

export const PatPeepoScreen = () => {
  const { setCanAdvance, advanceContent } = useContentContext();
  const [peepoDamage, setPeepoDamage] = useState(196);
  const [isShaking, setIsShaking] = useState(false);
  const [peepoDamageText, setPeepoDamageText] = useState<string | null>(null);
  const [smackPosition, setSmackPosition] = useState<[number, number] | null>(
    null,
  );
  const [showBanner, setShowBanner] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  const smack = (event: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = event;
    setSmackPosition([clientX, clientY]);
    setTimeout(() => {
      setSmackPosition(null);
    }, 100);
  };

  const disableClick = peepoDamage >= 200;

  const handleClick: React.MouseEventHandler = (event) => {
    if (disableClick) {
      return;
    }

    setIsShaking(true);
    setPeepoDamage((oldDamage) => oldDamage + 4);
    smack(event);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => setIsShaking(false), 100);
  };

  useEffect(() => {
    if (peepoDamage === 80) {
      setPeepoDamageText("P-PEEP! P-PEEP! PEEP!");
    } else if (peepoDamage === 160) {
      setPeepoDamageText("Peep... Peep...");
    } else if (peepoDamage >= 200) {
      (async () => {
        setShowBanner(true);
        await wait(2000);
        setShowBanner(false);
        await wait(2000);
        advanceContent();
      })();
    }
  }, [peepoDamage]);

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
            src={peepoDamage >= 160 ? PEEPO_CRY_IMAGE_URL : PEEPO_IMAGE_URL}
            alt="ducko sleepo"
            style={{
              width: "350px",
              height: `${350 - peepoDamage}px`,
              animation: isShaking ? "horizontal-shaking 0.1s" : "none",
            }}
          />
        </Stack>
      </Button>
      {!!peepoDamageText && (
        <DialogueTextBox
          speaker="Peepo"
          text={peepoDamageText}
          portraitImagePath={
            peepoDamage >= 160
              ? PEEPO_CRY_PORTRAIT_IMAGE_URL
              : PEEPO_PORTRAIT_IMAGE_URL
          }
          onRenderComplete={() => {
            setTimeout(() => setPeepoDamageText(null), 2000);
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
            animation: "smack 0.1s",
            position: "absolute",
            top: smackPosition[1] - 50,
            left: smackPosition[0] / 2,
            rotate: `${getRandomNumber(-45, 45)}deg`,
          }}
        />
      )}
      <Stack
        sx={{
          position: "absolute",
          top: 100,
          left: 0,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Collapse in={showBanner} orientation="horizontal" timeout={2000}>
          <Card sx={{ width: "90vw", mx: "5vw" }}>
            <CardHeader
              avatar={
                <Avatar
                  src={PEEPO_CRY_PORTRAIT_IMAGE_URL}
                  variant="rounded"
                  sx={{ width: "60px", height: "60px" }}
                />
              }
              title="Counting Your Chickens"
              subheader="+5000XP"
            />
          </Card>
        </Collapse>
      </Stack>
    </Container>
  );
};

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
