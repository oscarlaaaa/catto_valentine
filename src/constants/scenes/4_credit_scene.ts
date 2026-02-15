import { ActionId, type Scene } from "../../types/Scene";

export const SLIDESHOW_SCREEN_ID = "final-screen-1";

export const END_CREDIT_SCENE: Scene = {
  backgroundImagePath: null,
  nextScene: null,
  content: {
    [SLIDESHOW_SCREEN_ID]: {
      type: "action",
      actionId: ActionId.LAST_SCREEN,
      next: null,
    },
  },
  startingContentId: SLIDESHOW_SCREEN_ID,
};
