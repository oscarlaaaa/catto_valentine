import type { Scene } from "../../types/Scene";
import RESTAURANT_SCENE_URL from "@assets/backgrounds/restaurant-background-image.webp";
import { CHARACTERS } from "../characters";
import { END_CREDIT_SCENE } from "./4_credit_scene";

export const RESTAURANT_START = "resto-oscaro-hi-catto";

export const RESTAURANT_SCENE: Scene = {
  backgroundImagePath: RESTAURANT_SCENE_URL,
  nextScene: END_CREDIT_SCENE,
  content: {
    [RESTAURANT_START]: {
      type: "dialogue",
      text: "You both head to a nearby restaurant with good reviews. The menu is extremely expensive but it's fine because you deserve it. You both finish your meals very quickly.",
      next: "resto-talko-1",
    },
    "resto-talko-1": {
      type: "dialogue",
      text: "Great, meal! Don't worry about the bill, my love - nothing's too expensive or too good for my wonderful and beautiful girlfriend.",
      next: "resto-talko-2",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-2": {
      type: "dialogue",
      text: "You gag a little bit inside and a lot outside. You shoot him a disgusted look.",
      next: "resto-talko-3",
    },
    "resto-talko-3": {
      type: "dialogue",
      text: "You know, past me would never have guessed that my future girlfriend would be like this. Gagging at any compliments or jokes I make.",
      next: "resto-talko-4",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-4": {
      type: "dialogue",
      text: "It took a bit to get used to, but I'm really glad that I don't feel any pressure to act a certain way just to make sure I don't get a negative reaction from you.",
      next: "resto-talko-5",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-5": {
      type: "dialogue",
      text: "I can really be myself around you, and feel comfortable in my own skin. I really appreciate that part about you.",
      next: "resto-talko-5a",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-5a": {
      type: "dialogue",
      text: "*click*",
      next: "resto-talko-5b",
    },
    "resto-talko-5b": {
      type: "dialogue",
      text: "Hey, I got a great picture of you!",
      next: "resto-talko-5c",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.grab,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-5c": {
      type: "dialogue",
      text: "Here, take a peek. I think this is the happiest I've seen you today.",
      next: "resto-talko-5d",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.show_face,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-5d": {
      type: "dialogue",
      text: "That aside...",
      next: "resto-talko-6",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.grab,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-6": {
      type: "dialogue",
      text: "I'm sorry that I'm late often; that I forget things so easily; that I have a lot of emotions I struggle to deal with; that sometimes I'm not considerate enough about you.",
      next: "resto-talko-7",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.stare,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-7": {
      type: "dialogue",
      text: "Thank you for helping me work through everything and thank you for being my amazing girlfriend. I can't imagine what kind of person I would be if I didn't have you.",
      next: "resto-talko-8",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-8": {
      type: "dialogue",
      text: "I hope you know that even if I don't say it much, that I love you a ton and would do anything for you.",
      next: "resto-talko-9",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-9": {
      type: "dialogue",
      text: "With that being said...",
      next: "resto-talko-10",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.normal,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-10": {
      type: "dialogue",
      text: "Please be my valentine this year!",
      next: "resto-talko-11",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.give,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-11": {
      type: "decision",
      options: [
        {
          outcome: "resto-no-1",
          text: "Fuck you",
        },
        {
          outcome: "resto-no-1",
          text: "No",
        },
        {
          outcome: "resto-no-1",
          text: "Hell no",
        },
        {
          outcome: "resto-yes",
          text: "Okay, fine...",
        },
      ],
      prompt: "Be Oscar's Valentine?",
    },
    "resto-no-1": {
      type: "dialogue",
      text: "Please!",
      next: "resto-talko-12",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.crouch,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-talko-12": {
      type: "decision",
      options: [
        {
          outcome: "resto-deez",
          text: "Deez nutz",
        },
        {
          outcome: "resto-no-2",
          text: "Still no",
        },
        {
          outcome: "resto-yes",
          text: "Okay, fine...",
        },
      ],
      prompt: "Be Oscar's Valentine?",
    },
    "resto-deez": {
      type: "dialogue",
      text: ".........................",
      next: "resto-talko-12",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.crouch,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-no-2": {
      type: "dialogue",
      text: "please please please please please please please please please please please please please please please please please please please please ",
      next: "resto-no-3",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.bow,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-no-3": {
      type: "dialogue",
      text: "please please please please please please please please please please please please please please please please please please please please please",
      next: "resto-decision-last",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.bow,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-decision-last": {
      type: "decision",
      options: [
        {
          outcome: "resto-yes",
          text: "If I have to...",
        },
      ],
      prompt: "Just say yes",
    },
    "resto-yes": {
      type: "dialogue",
      text: "Amazing! You're the best!",
      next: "resto-yes-2",
      fullBodyImagePath: CHARACTERS.Oscar.images.full.crouch,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
    "resto-yes-2": {
      type: "dialogue",
      text: "Happy Valentines Catto!",
      next: null,
      fullBodyImagePath: CHARACTERS.Oscar.images.full.give_duck,
      portraitImagePath: CHARACTERS.Oscar.images.portraits.normal,
      speaker: CHARACTERS.Oscar.name,
    },
  },
  startingContentId: RESTAURANT_START,
};
