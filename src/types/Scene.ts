export interface Scene {
  backgroundImagePath: string | null;
  nextScene: Scene | null;
  content: Record<ContentId, Content>;
  startingContentId: ContentId;
}

export type Content = Dialogue | Action | Decision;
export type ContentId = string;

interface ContentType {
  type: "dialogue" | "action" | "decision";
}

export interface Dialogue extends ContentType {
  type: "dialogue";
  speaker?: string;
  text: string;
  portraitImagePath?: string;
  fullBodyImagePath?: string;
  next: ContentId | null;
}

export interface Action extends ContentType {
  type: "action";
  actionId: (typeof ActionId)[keyof typeof ActionId];
  next: ContentId | null;
}

export const ActionId = {
  START_SCREEN: "action-1-start-screen",
  BEAT_PEEPO: "action-2-beat-peepo",
  SMACK_OSCAR: "action-3-smack-oscar",
  PAT_PSYDUCK: "action-4-pat-ducko",
} as const;

export interface Decision extends ContentType {
  type: "decision";
  prompt: string;
  options: DecisionOption[];
}

interface DecisionOption {
  text: string;
  outcome: ContentId;
}
