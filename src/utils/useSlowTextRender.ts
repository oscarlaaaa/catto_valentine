import { useState, useRef, useEffect } from "react";

export const useSlowTextRender = ({
  text,
  letterIntervalMs = 10,
  onRenderComplete,
}: {
  text: string;
  letterIntervalMs?: number;
  onRenderComplete?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  const lastText = useRef<string>(null);
  const intervalRef = useRef<number>(null);

  const textPropHasChanged = lastText.current !== text;

  // reset if our text prop changes;
  if (textPropHasChanged) {
    setDisplayedText("");
    lastText.current = text;
  }

  useEffect(() => {
    if (text && text !== displayedText) {
      intervalRef.current = setInterval(() => {
        setDisplayedText((currentText) =>
          text.slice(0, currentText.length + 1),
        );
      }, letterIntervalMs);
    } else if (text === displayedText) {
      onRenderComplete?.();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, displayedText, textPropHasChanged]);

  return {
    displayedText,
  };
};
