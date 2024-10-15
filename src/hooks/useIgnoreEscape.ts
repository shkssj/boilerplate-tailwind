import { useEffect, useState } from "react";

export const useIgnoreEscape = () => {
  const [ignoreEscape, setIgnoreEscape] = useState(false);

  useEffect(() => {
    (window as any).ignoreEscape = ignoreEscape;

    return () => {
      delete (window as any).ignoreEscape;
    };
  }, [ignoreEscape]);

  return { ignoreEscape, setIgnoreEscape };
};

export default useIgnoreEscape;
