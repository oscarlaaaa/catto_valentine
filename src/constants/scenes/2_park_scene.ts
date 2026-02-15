import { ActionId, type Content, type Scene } from "../../types/Scene";
import PARK_SCENE_URL from "@assets/backgrounds/park-background-image.webp";
import { RESTAURANT_SCENE } from "./3_restaurant_scene";
import { CHARACTERS } from "../characters";

export const PARK_START_CONTENT_ID = "park-start";

const START_SCENE: Record<string, Content> = {
  [PARK_START_CONTENT_ID]: {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "Nice! This was a good way to kill some time. Luckily the weather is not bad as well.",
    next: "parko-oscaro-1",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
  },
  "parko-oscaro-1": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "Hey, look! There's a wild Psyduck in the park as well. Let's go say hi.",
    next: "parko-oscaro-2",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
  },
};

const PSYDUCK_SCENE: Record<string, Content> = {
  "parko-oscaro-2": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "Hey, little guy!",
    next: "parko-oscaro-3",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.stare,
  },
  "parko-oscaro-3": {
    type: "dialogue",
    speaker: CHARACTERS.Psyduck.name,
    text: "Psy-sy-sy-psyduck?",
    next: "parko-oscaro-4",
    portraitImagePath: CHARACTERS.Psyduck.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Psyduck.images.full.normal,
  },
  "parko-oscaro-4": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "He looks friendly! Maybe you can pet him?",
    next: "parko-oscaro-5",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.stare,
  },
  "parko-oscaro-5": {
    type: "action",
    actionId: ActionId.PAT_PSYDUCK,
    next: null,
  },
};

export const PARK_SCENE: Scene = {
  backgroundImagePath: PARK_SCENE_URL,
  nextScene: RESTAURANT_SCENE,
  content: {
    ...START_SCENE,
    ...PSYDUCK_SCENE,
  },
  startingContentId: PARK_START_CONTENT_ID,
};
