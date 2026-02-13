import type { Scene } from "../types/Scene";

const BACKGROUND_PATH = "/backgrounds";

export const RESTAURANT_SCENE: Scene = {
  backgroundImagePath: `${BACKGROUND_PATH}/restaurant-background-image.webp`,
  nextScene: null,
};

export const PARK_SCENE: Scene = {
  backgroundImagePath: `${BACKGROUND_PATH}/park-background-image.webp`,
  nextScene: RESTAURANT_SCENE,
};
export const DOOR_SCENE: Scene = {
  backgroundImagePath: `${BACKGROUND_PATH}/door-background-image.webp`,
  nextScene: PARK_SCENE,
};

export const START_SCENE: Scene = {
  backgroundImagePath: null,
  nextScene: DOOR_SCENE,
};
