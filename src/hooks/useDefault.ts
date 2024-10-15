import { useEffect, useState } from "react";
import { fetchNui } from "../utils/fetchNui";

interface UseDefaultReturn {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useDefault = (
  defaultVisible: boolean = false,
  effect: boolean = false,
  additionalFunction?: (event: KeyboardEvent) => void
): UseDefaultReturn => {
  const [visible, setVisible] = useState(defaultVisible);

  useEffect(() => {
    if (!effect) return;

    const keyDownEvent = (event: KeyboardEvent) => {
      if (event.key === "Escape" && visible && !(window as any).ignoreEscape) {
        setVisible(false);
        fetchNui("closeNui");

        if (additionalFunction) {
          additionalFunction(event);
        }
      }
    };

    window.addEventListener("keydown", keyDownEvent);

    return () => {
      window.removeEventListener("keydown", keyDownEvent);
    };
  }, [visible, effect, additionalFunction]);

  return { visible, setVisible };
};

export default useDefault;
