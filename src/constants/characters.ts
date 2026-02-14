import type { Character } from "../types/Character";

import OSCAR_PORTRAIT from "@assets/portraits/oscar-normal.webp";
import OSCAR_PORTRAIT_SAD from "@assets/portraits/oscar-frown.webp";

import PEEPO_PORTRAIT from "@assets/portraits/peepo.webp";
import PEEPO_PORTRAIT_SAD from "@assets/portraits/peepo-cry.webp";
import PEEPO_FULL from "@assets/full_body/peepo.webp";
import PEEPO_FULL_SAD from "@assets/full_body/peepo-cry.webp";

function getCharacters(): { [name: string]: Character } {
  return {
    Oscar: {
      name: "Oscar",
      images: {
        portraits: {
          normal: OSCAR_PORTRAIT,
          sad: OSCAR_PORTRAIT_SAD,
        },
        full: {},
      },
    },
    Peepo: {
      name: "Peepo",
      images: {
        portraits: {
          normal: PEEPO_PORTRAIT,
          sad: PEEPO_PORTRAIT_SAD,
        },
        full: {
          normal: PEEPO_FULL,
          sad: PEEPO_FULL_SAD,
        },
      },
    },
  };
}

export const CHARACTERS = getCharacters();
