const ONE_HOUR = 60 * 60 * 1000;

export function saveCache(key, data) {
  const item = {
    data,
    timestamp: Date.now(),
  };

  localStorage.setItem(key, JSON.stringify(item));
}

export function loadCache(key) {
  const cached = localStorage.getItem(key);

  if (!cached) {
    return null;
  }

  const parsed = JSON.parse(cached);

  const isExpired =
    Date.now() - parsed.timestamp > ONE_HOUR;

  if (isExpired) {
    localStorage.removeItem(key);
    return null;
  }

  return parsed.data;
}