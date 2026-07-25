const dateFmt = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatDate(date: Date): string {
  return dateFmt.format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Kaba okuma süresi (dk), ~200 kelime/dk. */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
