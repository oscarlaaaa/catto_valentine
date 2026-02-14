import type { Scene } from "../../types/Scene";
import PARK_SCENE_URL from "@assets/backgrounds/park-background-image.webp";
import { RESTAURANT_SCENE } from "./3_restaurant_scene";

export const PARK_SCENE: Scene = {
  backgroundImagePath: PARK_SCENE_URL,
  nextScene: RESTAURANT_SCENE,
  content: {},
  startingContentId: "",
};
