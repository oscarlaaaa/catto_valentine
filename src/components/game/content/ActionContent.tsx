import { ActionId, type Action } from "../../../types/Scene";
import { PatPeepoScreen } from "./action_content/PatPeepoScreen";
import { PatPsyduckScreen } from "./action_content/PatPsyduckScreen";
import { SmackOscarScreen } from "./action_content/SmackOscarScreen";
import { StartScreen } from "./action_content/StartScreen";

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
    default:
      return null;
  }
};
