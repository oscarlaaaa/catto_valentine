import Container from "@mui/material/Container";
import { useContentContext } from "../../../context/ContentProvider";
import type { ContentId, Decision } from "../../../types/Scene";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Button, CardActions, Collapse } from "@mui/material";
import { useSlowTextRender } from "../../../utils/useSlowTextRender";

const DECISION_OUTCOME_CACHE = new Map<ContentId, number>();

export const DecisionContent = ({
  currentDecision,
}: {
  currentDecision: Decision;
}) => {
  const { advanceContent, setCanAdvance } = useContentContext();
  const { displayedText } = useSlowTextRender({
    text: currentDecision.prompt,
    onRenderComplete: () => {
      setTimeout(() => setCanAdvance(true), 500);
    },
  });

  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        maxHeight: "1000px",
        padding: 2,
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(80, 80, 80, 0.42)",
      }}
    >
      <Stack
        width="100%"
        height="100%"
        gap={1}
        justifyContent="space-around"
        alignItems="center"
      >
        <Card
          variant="elevation"
          sx={{ width: "100%", textAlign: "left", py: 2 }}
        >
          <CardContent sx={{ justifyContent: "center", alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{ textTransform: "none", textAlign: "center" }}
            >
              {displayedText}
            </Typography>
          </CardContent>
          <CardActions>
            <Collapse
              in={displayedText === currentDecision.prompt}
              timeout={1000}
              sx={{ width: "100%" }}
            >
              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  width: "100%",
                }}
              >
                {currentDecision.options.map((option) => (
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      color: "white",
                      backgroundColor: "#69a2be",
                      textTransform: "lowercase",
                    }}
                    key={option.text}
                    onClick={() => {
                      advanceContent(option.outcome);
                      DECISION_OUTCOME_CACHE.set(
                        option.outcome,
                        (DECISION_OUTCOME_CACHE.get(option.outcome) ?? 0) + 1,
                      );
                    }}
                    disabled={DECISION_OUTCOME_CACHE.has(option.outcome)}
                  >
                    {option.text}
                  </Button>
                ))}
              </Stack>
            </Collapse>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};
