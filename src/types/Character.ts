export interface Character {
  name: string;
  images: {
    portraits: Record<string, string>;
    full: Record<string, string>;
  };
}
