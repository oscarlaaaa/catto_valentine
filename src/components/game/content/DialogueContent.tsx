import Container from "@mui/material/Container";
import { useContentContext } from "../../../context/ContentProvider";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import type { Dialogue } from "../../../types/Scene";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useBlink } from "../../../utils/useBlink";
import { useSlowTextRender } from "../../../utils/useSlowTextRender";

export const DialogueContent = ({
  currentDialogue,
}: {
  currentDialogue: Dialogue;
}) => {
  const { advanceContent, setCanAdvance } = useContentContext();

  const speaker = currentDialogue?.speaker ?? "";
  const currentDialogueText = currentDialogue?.text ?? "";
  const portraitImagePath = currentDialogue?.portraitImagePath ?? "";
  const fullBodyImagePath = currentDialogue?.fullBodyImagePath ?? "";

  const onAdvance = () => {
    advanceContent();
  };

  return (
    <Container
      sx={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "1000px",
        height: "100%",
        padding: 2,
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <img />
      <Button onClick={onAdvance} sx={{ width: "100%", height: "100%" }}>
        {currentDialogue && (
          <DialogueTextBox
            speaker={speaker}
            text={currentDialogueText}
            portraitImagePath={portraitImagePath}
            fullBodyImagePath={fullBodyImagePath}
            onRenderComplete={() => setTimeout(() => setCanAdvance(true), 500)}
          />
        )}
      </Button>
    </Container>
  );
};

export const DialogueTextBox = ({
  speaker,
  text,
  portraitImagePath,
  fullBodyImagePath,
  onRenderComplete,
  sxOverrides,
}: Omit<Dialogue, "next" | "type"> & {
  onRenderComplete?: () => void;
  sxOverrides?: any;
}) => {
  const { displayedText } = useSlowTextRender({
    text,
    onRenderComplete,
  });

  return (
    <Stack sx={{ width: "100%", textAlign: "left" }}>
      {fullBodyImagePath && (
        <Stack width="100%" direction="row-reverse" minHeight="50%">
          <img
            src={fullBodyImagePath}
            alt="peep"
            style={{
              height: "auto",
              width: "50%",
            }}
          />
        </Stack>
      )}
      <Card
        variant="elevation"
        sx={{ width: "100%", textAlign: "left", ...sxOverrides }}
      >
        <CardContent>
          <Stack direction="row" gap={2}>
            {portraitImagePath && (
              <Avatar
                alt="peepo"
                src={portraitImagePath}
                variant="rounded"
                sx={{ height: "60px", width: "60px", border: "2px solid grey" }}
              />
            )}
            <Stack>
              {speaker && (
                <Typography
                  gutterBottom
                  sx={{
                    color: "text.secondary",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {speaker}
                </Typography>
              )}
              <Typography
                variant="body2"
                sx={{ textTransform: "none", minHeight: "20px" }}
              >
                {displayedText}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions sx={{ mt: "-20px" }}>
          <Stack direction="row-reverse" width="100%">
            <BlinkingDownArrow isHidden={displayedText !== text} />
          </Stack>
        </CardActions>
      </Card>
    </Stack>
  );
};

const ARROW_BLINK_INTERVAL_MS = 500;
const BlinkingDownArrow = ({ isHidden }: { isHidden: boolean }) => {
  const { isDisplayed } = useBlink({
    disabled: isHidden,
    intervalMs: ARROW_BLINK_INTERVAL_MS,
  });

  return (
    <ArrowDropDownIcon fontSize="small" sx={{ opacity: isDisplayed ? 1 : 0 }} />
  );
};
