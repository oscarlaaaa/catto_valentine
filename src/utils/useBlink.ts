import { useState, useRef, useEffect } from "react";

export const useBlink = ({
  disabled = false,
  intervalMs,
}: {
  disabled?: boolean;
  intervalMs: number;
}) => {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const intervalRef = useRef<number>(null);

  useEffect(() => {
    if (!disabled) {
      intervalRef.current = setInterval(() => {
        setIsDisplayed((oldVal) => !oldVal);
      }, intervalMs);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [disabled, intervalMs]);

  return { isDisplayed: isDisplayed && !disabled };
};
