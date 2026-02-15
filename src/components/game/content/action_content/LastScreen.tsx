import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { wait } from "../../../../utils/wait";

import IMAGE_1 from "@assets/misc/catto-1.webp";
import IMAGE_2 from "@assets/misc/catto-2.webp";
import IMAGE_3 from "@assets/misc/catto-3.webp";
import IMAGE_4 from "@assets/misc/catto-4.webp";
import IMAGE_5 from "@assets/misc/catto-5.webp";
import IMAGE_6 from "@assets/misc/catto-6.webp";
import BEFORE_IMAGE_URL from "@assets/start_screen/start-screen-before.webp";

const IMAGES = [IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, IMAGE_5, IMAGE_6];

export const LastScreen = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentOpacity, setCurrentOpacity] = useState(0);

  const swapPhoto = () => {
    setCurrentIdx((curIdx) => (curIdx + 1) % IMAGES.length);
  };

  const cycle = async () => {
    setCurrentOpacity(1);
    await wait(4000);
    setCurrentOpacity(0);
    await wait(2000);
    swapPhoto();
    setTimeout(cycle, 2000);
  };

  useEffect(() => {
    cycle();
  }, []);

  return (
    <Container
      sx={{
        backgroundColor: "#69a2be",
        width: "100%",
        height: "100%",
        padding: 0,
      }}
    >
      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Typography variant="h4" color="white" textTransform="lowercase">
          Happy Valentines Day, Cat
        </Typography>
        <Typography variant="body2" color="white" textTransform="lowercase">
          Love, Oscar
        </Typography>
        <img
          src={IMAGES[currentIdx]}
          alt="us yay"
          style={{
            width: "70%",
            height: "auto",
            opacity: currentOpacity,
            transition: "opacity 1s ease-out",
          }}
        />
        <img
          src={BEFORE_IMAGE_URL}
          alt="ducko sleepo"
          style={{ maxWidth: "150px", maxHeight: "150px" }}
        />
      </Stack>
    </Container>
  );
};
