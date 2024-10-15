import { isEnvBrowser } from "./misc";

interface DebugEvent<T = any> {
  action: string;
  data: T;
}

const isBrowser = isEnvBrowser();

export const debugData = <P>(events: DebugEvent<P>[], timer = 500): void => {
  if (import.meta.env.DEV && isBrowser) {
    for (const event of events) {
      setTimeout(() => {
        window.dispatchEvent(
          new MessageEvent("message", {
            data: event
          })
        );
      }, timer);
    }
  }
};
