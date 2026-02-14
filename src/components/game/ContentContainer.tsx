import { useContentContext } from "../../context/ContentProvider";
import { ActionContent } from "./content/ActionContent";
import { DecisionContent } from "./content/DecisionContent";
import { DialogueContent } from "./content/DialogueContent";

export const ContentContainer = () => {
  const { currentContent } = useContentContext();

  if (!currentContent) {
    return null;
  }

  if (currentContent.type === "dialogue") {
    return <DialogueContent currentDialogue={currentContent} />;
  }

  if (currentContent.type === "decision") {
    return <DecisionContent currentDecision={currentContent} />;
  }

  if (currentContent.type === "action") {
    return <ActionContent currentAction={currentContent} />;
  }

  return null;
};
