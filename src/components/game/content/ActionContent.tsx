import { CHARACTERS } from "../../../constants/characters";
import { ActionId, type Action } from "../../../types/Scene";
import { LastScreen } from "./action_content/LastScreen";
import { PatPeepoScreen } from "./action_content/PatPeepoScreen";
import { PatPsyduckScreen } from "./action_content/PatPsyduckScreen";
import { SmackOscarScreen } from "./action_content/SmackOscarScreen";
import { StartScreen } from "./action_content/StartScreen";
import HAND_PUSH_IMAGE_URL from "@assets/misc/push-hand.webp";

export const ActionContent = ({ currentAction }: { currentAction: Action }) => {
  switch (currentAction.actionId) {
    case ActionId.START_SCREEN:
      return <StartScreen />;
    case ActionId.BEAT_PEEPO:
      return <PatPeepoScreen />;
    case ActionId.SMACK_OSCAR:
      return <SmackOscarScreen />;
    case ActionId.PAT_PSYDUCK:
      return <PatPsyduckScreen />;
    case ActionId.PUSH_OSCAR:
      return (
        <SmackOscarScreen
          startingImage={CHARACTERS.Oscar.images.full.grab}
          handImage={HAND_PUSH_IMAGE_URL}
        />
      );
    case ActionId.LAST_SCREEN:
      return <LastScreen />;
    default:
      return null;
  }
};
