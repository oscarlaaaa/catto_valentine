import { ActionId, type Scene } from "../../types/Scene";
import { DOOR_SCENE } from "./1_door_scene";

export const HOME_SCREEN_ID = "start-1";

export const START_SCENE: Scene = {
  backgroundImagePath: null,
  nextScene: DOOR_SCENE,
  content: {
    [HOME_SCREEN_ID]: {
      type: "action",
      actionId: ActionId.START_SCREEN,
      next: null,
    },
  },
  startingContentId: HOME_SCREEN_ID,
};
