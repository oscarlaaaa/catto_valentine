import type { Character } from "../types/Character";

import OSCAR_PORTRAIT from "@assets/portraits/oscar-normal.webp";
import OSCAR_PORTRAIT_SAD from "@assets/portraits/oscar-frown.webp";

import OSCAR_NORMAL from "@assets/full_body/oscar-normal.webp";
import OSCAR_CROUCH from "@assets/full_body/oscar-crouch.webp";
import OSCAR_BOW from "@assets/full_body/oscar-bow.webp";
import OSCAR_DEAD from "@assets/full_body/oscar-dead.webp";
import OSCAR_GIVE from "@assets/full_body/oscar-give.webp";
import OSCAR_GRAB from "@assets/full_body/oscar-grab-something.webp";
import OSCAR_HIT from "@assets/full_body/oscar-hit.webp";
import OSCAR_STARE from "@assets/full_body/oscar-stare.webp";

const OSCAR_CHARACTER: Character = {
  name: "Oscar",
  images: {
    portraits: {
      normal: OSCAR_PORTRAIT,
      sad: OSCAR_PORTRAIT_SAD,
    },
    full: {
      normal: OSCAR_NORMAL,
      crouch: OSCAR_CROUCH,
      bow: OSCAR_BOW,
      dead: OSCAR_DEAD,
      give: OSCAR_GIVE,
      grab: OSCAR_GRAB,
      hit: OSCAR_HIT,
      stare: OSCAR_STARE,
    },
  },
};

import PEEPO_PORTRAIT from "@assets/portraits/peepo.webp";
import PEEPO_PORTRAIT_SAD from "@assets/portraits/peepo-cry.webp";

import PEEPO_FULL from "@assets/full_body/peepo.webp";
import PEEPO_FULL_SAD from "@assets/full_body/peepo-cry.webp";

const PEEPO_CHARACTER: Character = {
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
};

import PSYDUCK_PORTRAIT from "@assets/portraits/psyduck.webp";
import PSYDUCK_SAD_PORTRAIT from "@assets/full_body/peepo-cry.webp";

import PSYDUCK_FULL from "@assets/full_body/psyduck.webp";

const PSYDUCK_CHARACTER: Character = {
  name: "Psyduck",
  images: {
    portraits: {
      normal: PSYDUCK_PORTRAIT,
    },
    full: {
      normal: PSYDUCK_FULL,
    },
  },
};

export const CHARACTERS = {
  Oscar: OSCAR_CHARACTER,
  Peepo: PEEPO_CHARACTER,
  Psyduck: PSYDUCK_CHARACTER,
};
