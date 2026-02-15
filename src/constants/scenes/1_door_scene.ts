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
      text: "Hey stinky! Happy Valentines Day!",
      speaker: CHARACTERS.Oscar.name,
      next: "text-oscar-dialog-6",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
    },
    "text-oscar-dialog-6": {
      type: "dialogue",
      text: "Be my valentine?",
      speaker: CHARACTERS.Oscar.name,
      next: "text-oscar-choice-1",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.give,
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
      text: `I actually didn't add any logic for this option because I knew there was no way you'd click this on purpose
       unless you were replaying it to see all of the options. Did you click this by accident`,
      next: "text-oscar-choice-1",
    },
    "text-oscar-choice-2-smack": {
      type: "action",
      actionId: ActionId.SMACK_OSCAR,
      next: "text-oscar-dialog-7",
    },
    "text-oscar-dialog-7": {
      type: "dialogue",
      text: "What was that for? I'm not late - I'm a bit early, even.",
      speaker: CHARACTERS.Oscar.name,
      next: "question-oscar-dialog-8",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
    },
    "question-oscar-dialog-8": {
      type: "dialogue",
      text: `Speaking of, that kind of reminds me of our first date when you were so late to the point that the waiters 
        and waitresses kept checking in on me.`,
      speaker: CHARACTERS.Oscar.name,
      next: "question-oscar-dialog-8a",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
    },
    "question-oscar-dialog-8a": {
      type: "dialogue",
      text: `We still finished the date though - do you remember what my favourite part of the date was?`,
      speaker: CHARACTERS.Oscar.name,
      next: "question-oscar-choice-2",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
    },
    "question-oscar-choice-2": {
      type: "decision",
      prompt: "What was Oscar's favourite part of the date?",
      options: [
        {
          outcome: "question-oscar-choice-3-maple",
          text: "Listening to me talk about my maplestory character for two hours",
        },
        {
          outcome: "question-oscar-choice-3-waiting",
          text: "Patiently waiting for me to arrive an hour and a half late",
        },
        {
          outcome: "question-oscar-choice-3-grocery",
          text: "Going grocery shopping with me after bubble tea",
        },
        {
          outcome: "question-oscar-choice-3-nutz",
          text: "Deez nutz",
        },
      ],
    },
    "question-oscar-choice-3-nutz": {
      type: "dialogue",
      text: "......................",
      speaker: CHARACTERS.Oscar.name,
      next: "question-oscar-choice-3-nutz-2",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.stare,
    },
    "question-oscar-choice-3-nutz-2": {
      type: "dialogue",
      text: "................................................",
      speaker: CHARACTERS.Oscar.name,
      next: "question-oscar-choice-2",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.stare,
    },
    "question-oscar-choice-3-grocery": {
      type: "dialogue",
      text: "Nope, though I guess carrying your grocery basket gave me a glimpse into the rest of our relationship.",
      speaker: CHARACTERS.Oscar.name,
      next: "question-oscar-choice-2",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
    },
    "question-oscar-choice-3-waiting": {
      type: "dialogue",
      text: "You wish.",
      speaker: CHARACTERS.Oscar.name,
      next: "question-oscar-choice-2",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
    },
    "question-oscar-choice-3-maple": {
      type: "dialogue",
      text: `Yup! I've never met anyone who spends their first date going over their virtual character and how cute it is,
        but I enjoyed how passionate you got and how much you could chat about someething without caring if the other person
        was into it.`,
      speaker: CHARACTERS.Oscar.name,
      next: "dialogue-oscar-1-maple",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
    },
    "dialogue-oscar-1-maple": {
      type: "dialogue",
      text: `I see it a lot recently too, and I really enjoy seeing you get obsessive over new games that you start (even if
        you are mean to me when we play them together).`,
      speaker: CHARACTERS.Oscar.name,
      next: "door-scene-end",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
    },
    "door-scene-end": {
      type: "dialogue",
      text: `Enough sappy - let's head out! We can do some raiding in the part nearby before we head to dinner since we have time.`,
      speaker: CHARACTERS.Oscar.name,
      next: "door-scene-end-2",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
    },
    "door-scene-end-2": {
      type: "dialogue",
      text: `Bye Peepo! See you later!`,
      speaker: CHARACTERS.Oscar.name,
      next: "door-scene-end-3",
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
    },
    "door-scene-end-3": {
      type: "dialogue",
      text: "*slam*",
      next: "door-scene-end-4",
    },
    "door-scene-end-4": {
      type: "dialogue",
      speaker: CHARACTERS.Peepo.name,
      text: "..........p...peep.........",
      next: null,
      portraitImagePath: CHARACTERS.Peepo.images.portraits.sad,
      fullBodyImagePath: CHARACTERS.Peepo.images.full.sad,
    },
  };
}

export const DOOR_SCENE: Scene = {
  backgroundImagePath: DOOR_SCENE_URL,
  nextScene: PARK_SCENE,
  content: DOOR_SCENE_CONTENT,
  startingContentId: DOOR_START_CONTENT_ID,
};
