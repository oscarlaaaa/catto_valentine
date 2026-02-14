import {
  ActionId,
  type Content,
  type ContentId,
  type Scene,
} from "../../types/Scene";
import DOOR_SCENE_URL from "@assets/backgrounds/door-background-image.webp";
import { PARK_SCENE } from "./2_park_scene";
import { CHARACTERS } from "../characters";

export const DOOR_START_CONTENT_ID = "dialogue-1";

const DOOR_SCENE_CONTENT: Record<ContentId, Content> = {
  [DOOR_START_CONTENT_ID]: {
    type: "dialogue",
    speaker: "Me",
    text: "February 14th, 1:00 pm.",
    next: "dialogue-2",
  },
  "dialogue-2": {
    type: "dialogue",
    speaker: "Me",
    text: "Valentines Day.",
    next: "dialogue-3",
  },
  "dialogue-3": {
    type: "dialogue",
    speaker: "Me",
    text: "Oscar probably has stuff planned for us later today. In the meantime, what should I do?",
    next: "dialogue-4",
  },
  "dialogue-4": {
    type: "decision",
    prompt: "What should you do before Oscar arrives?",
    options: [
      {
        outcome: "dialogue-5-patto-peepo",
        text: "Squish and beat up peepo to kill some time",
      },
      {
        outcome: "text-oscar-dialog-1",
        text: "Send Oscar a text telling him he's late",
      },
      {
        outcome: "sleepy-dialog-1",
        text: "Go back to bed and loaf or sleep more",
      },
    ],
  },
  "sleepy-dialog-1": {
    type: "dialogue",
    text: "I knew you would click this. Why would you click this? It's already 1 pm? Get out of bed already",
    next: "dialogue-4",
  },
  ...getPeepoContent(),
  ...getOscarContent(),
};

function getPeepoContent(): Record<ContentId, Content> {
  return {
    "dialogue-5-patto-peepo": {
      type: "dialogue",
      speaker: "Me",
      text: "I decided to beat up Peepo a bit, just to show him who's boss. It's not like he does anything useful anyways, so I'll consider it rent for staying in my apartment.",
      next: "dialogue-6-patto-peepo",
    },
    "dialogue-6-patto-peepo": {
      type: "dialogue",
      speaker: "Me",
      text: "Hi Peepo! Come over here!",
      next: "dialogue-7-patto-peepo",
    },
    "dialogue-7-patto-peepo": {
      type: "dialogue",
      speaker: CHARACTERS.Peepo.name,
      text: "Peep! Peep! Peep! Peep! Peep!",
      next: "dialogue-8-patto-peepo",
      portraitImagePath: CHARACTERS.Peepo.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Peepo.images.full.normal,
    },
    "dialogue-8-patto-peepo": {
      type: "dialogue",
      speaker: CHARACTERS.Peepo.name,
      text: ".............Peep?",
      next: "action-1-patto-peepo",
      portraitImagePath: CHARACTERS.Peepo.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Peepo.images.full.normal,
    },
    "action-1-patto-peepo": {
      type: "action",
      actionId: ActionId.BEAT_PEEPO,
      next: "dialogue-9-patto-peepo",
    },
    "dialogue-9-patto-peepo": {
      type: "dialogue",
      speaker: CHARACTERS.Peepo.name,
      text: "...p-peep...peep...",
      next: "dialogue-10-patto-peepo",
      portraitImagePath: CHARACTERS.Peepo.images.portraits.sad,
      fullBodyImagePath: CHARACTERS.Peepo.images.full.sad,
    },
    "dialogue-10-patto-peepo": {
      type: "dialogue",
      speaker: "Me",
      text: "That'll teach him to be so fat and stinky in my apartment. What should I do now?",
      next: "dialogue-4",
    },
  };
}

function getOscarContent(): Record<ContentId, Content> {
  return {
    "text-oscar-dialog-1": {
      type: "dialogue",
      text: `Even though we've agreed to meet at 2 pm, I decided to text him and tell him he's late. 
        I also sent a smacking duck sticker and told him he was stinky to remind him of his place. He 
        calls me shortly after.`,
      next: "text-oscar-dialog-2",
    },
    "text-oscar-dialog-2": {
      type: "dialogue",
      speaker: CHARACTERS.Oscar.name,
      text: "*beep* Hey stinky! Woke up already? Your lovely boyfriend is literally a minute from your place, so just wait a sec and I'll come up! See you soon!",
      next: "text-oscar-dialog-3",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    },
    "text-oscar-dialog-3": {
      type: "dialogue",
      text: ".......*beep*",
      next: "text-oscar-dialog-4",
    },
    "text-oscar-dialog-4": {
      type: "dialogue",
      text: "............*KNOCK*...*KNOCK*...*KNOCK*",
      next: "text-oscar-dialog-5",
    },
    "text-oscar-dialog-5": {
      type: "dialogue",
      text: "Hey stinky! Happy Valentines Day! Will you be my Valentine?",
      speaker: CHARACTERS.Oscar.name,
      next: "text-oscar-choice-1",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
    },
    "text-oscar-choice-1": {
      type: "decision",
      prompt: "Do you want to be his Valentine?",
      options: [
        {
          outcome: "text-oscar-choice-1-yes",
          text: "Of course!",
        },
        {
          outcome: "text-oscar-choice-2-smack",
          text: "Smack him for coming late even though he was actually early but you just feel like smacking him",
        },
      ],
    },
    "text-oscar-choice-1-yes": {
      type: "dialogue",
      text: "I actually didn't add any logic for this option because I knew there was no way you'd click this unless you were replaying it to see all of the options.",
      next: "text-oscar-choice-1",
    },
    "text-oscar-choice-2-smack": {
      type: "action",
      actionId: ActionId.SMACK_OSCAR,
      next: "text-oscar-choice-1",
    },
  };
}

export const DOOR_SCENE: Scene = {
  backgroundImagePath: DOOR_SCENE_URL,
  nextScene: PARK_SCENE,
  content: DOOR_SCENE_CONTENT,
  startingContentId: DOOR_START_CONTENT_ID,
};
