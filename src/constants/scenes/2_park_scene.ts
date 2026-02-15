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
  "parko-oscaro-0": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "It's a shame we don't walk around together as much, but at least pokemon gets us out of the house.",
    next: "parko-oscaro-0a",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
  },
  "parko-oscaro-0a": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: `Speaking of, I really appreciate how well we've been doing long-distance and I'm super glad that you're so understanding
      of the fact that me moving back is going to be difficult.`,
    next: "parko-oscaro-0b",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
  },
  "parko-oscaro-0b": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: `I hope you know that I really love and appreciate your support! Even if you do beat me up sometimes.`,
    next: "parko-oscaro-1",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
  },
  "parko-oscaro-1": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "Oh hey, look! There's a wild Psyduck in the park as well. Let's go say hi.",
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
    next: "parko-oscaro-6",
  },
  "parko-oscaro-6": {
    type: "dialogue",
    speaker: CHARACTERS.Psyduck.name,
    text: "...................................................",
    next: "parko-oscaro-7",
    portraitImagePath: CHARACTERS.Psyduck.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Psyduck.images.full.normal,
  },
  "parko-oscaro-7": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "..................................",
    next: "parko-oscaro-8",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.stare,
  },
  "parko-oscaro-8": {
    type: "dialogue",
    text: "Psyduck slowly waddled away out of sight.",
    next: "parko-oscaro-9",
  },
  "parko-oscaro-9": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "Maybe you put a little too much force behind it...",
    next: "parko-oscaro-hehe-1",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
  },
};

const OSCAR_SCENE: Record<string, Content> = {
  "parko-oscaro-hehe-1": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "Also! Before I forget, I have something for you...",
    next: "parko-oscaro-hehe-2",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.grab,
  },

  "parko-oscaro-hehe-2": {
    type: "decision",
    prompt: "He's reaching to grab something. Do you want to do anything?",
    options: [
      {
        outcome: "parko-oscaro-push-him-wtf",
        text: "Push him down while he's distracted",
      },
      {
        outcome: "parko-oscaro-hehe-3",
        text: "Do nothing, you already beat him up earlier",
      },
    ],
  },
  "parko-oscaro-push-him-wtf": {
    type: "action",
    actionId: ActionId.PUSH_OSCAR,
    next: "parko-oscaro-post-push",
  },
  "parko-oscaro-post-push": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "...are you satisfied now?",
    next: "parko-oscaro-hehe-3",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.sad,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.grab,
  },
  "parko-oscaro-hehe-3": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "Ah, here it is!",
    next: "parko-oscaro-hehe-4",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.grab,
  },
  "parko-oscaro-hehe-4": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "Here you go! Flowers for Valentines day. Hope you like it!",
    next: "parko-oscaro-hehe-5",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.give_duck,
  },
  "parko-oscaro-hehe-5": {
    type: "dialogue",
    speaker: "Angry Psyduck",
    text: "Psy...",
    next: "parko-oscaroooo-1",
    portraitImagePath: CHARACTERS.Psyduck.images.portraits.angry,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.give_duck,
  },
};

const LAST_SCENE: Record<string, Content> = {
  "parko-oscaroooo-1": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "Another thing I love about you is that you're always thinking about the future and planning ahead for us.",
    next: "parko-oscaroooo-2",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
  },
  "parko-oscaroooo-2": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "I appreciate that a lot and it gives me a lot of security in our relationship knowing that you're expecting us to last well into the future.",
    next: "parko-oscaroooo-3",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
  },
  "parko-oscaroooo-3": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "...even if you're really just thinking about retiring early.",
    next: "parko-oscaroooo-4",
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.stare,
  },
  "parko-oscaroooo-4": {
    type: "dialogue",
    speaker: CHARACTERS.Oscar.name,
    text: "Enough about that though, let's head to dinner!",
    next: null,
    portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
  },
};

export const PARK_SCENE: Scene = {
  backgroundImagePath: PARK_SCENE_URL,
  nextScene: RESTAURANT_SCENE,
  content: {
    ...START_SCENE,
    ...PSYDUCK_SCENE,
    ...OSCAR_SCENE,
    ...LAST_SCENE,
  },
  startingContentId: PARK_START_CONTENT_ID,
};
