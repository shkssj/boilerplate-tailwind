let cache = new Map<string, { lastSeen: number; value: any }>();

function init() {
  const cacheData = localStorage.getItem("cache");
  if (cacheData) {
    cache = new Map(JSON.parse(cacheData));
  }
}

export function get<T>(key: string, timeout = 1000 * 60): T | undefined {
  const entry = cache.get(key);
  if (!entry) return undefined;

  if (Date.now() - entry.lastSeen > timeout) {
    remove(key);
    return undefined;
  }

  return entry.value;
}

export function set<T>(key: string, value: T): void {
  cache.set(key, {
    lastSeen: Date.now(),
    value: value
  });
  localStorage.setItem("cache", JSON.stringify([...cache]));
}

export function remove(key: string): void {
  cache.delete(key);
  localStorage.setItem("cache", JSON.stringify([...cache]));
}

export function clear(): void {
  cache.clear();
  localStorage.removeItem("cache");
}

init();
