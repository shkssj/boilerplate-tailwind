import { isEnvBrowser } from "./misc";

const resName = (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : "react-boilerplate";
const isBrowser = isEnvBrowser();

export async function fetchNui<T>(eventName: string, data?: unknown, mock?: unknown, timeout = 5000): Promise<T> {
  if (isBrowser) return mock as T;

  const controller = new AbortController();
  const { signal } = controller;
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`https://${resName}/${eventName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Failed to fetch NUI event: ${eventName} (status: ${response.status})`);
    }

    const formattedResponse = await response.json();
    return formattedResponse as T;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(`Request for NUI event: ${eventName} timed out after ${timeout} ms`);
    }
    throw new Error(`Failed to fetch NUI event: ${eventName} (${error})`);
  }
}
