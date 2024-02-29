"use client";

export function getPostViewsFromLocalStorage(link: string): number | null {
  const lsStoredViews = localStorage.getItem(link);
  return lsStoredViews ? Number(lsStoredViews) : null;
}

export function setPostViewsOnLocalStorage(link: string, views: number) {
  localStorage.setItem(link, views.toString());
}

export function incrementPostViewsOnLocalStorage(link: string) {
  const lsStoredViews = getPostViewsFromLocalStorage(link);

  if (!lsStoredViews) return undefined;

  localStorage.setItem(link, (lsStoredViews + 1).toString());
  return lsStoredViews + 1;
}

export function formatDate(d: Date) {
  return d.toLocaleDateString("pt-BR", {
    year: "2-digit",
    month: "2-digit",
    day: "numeric",
  });
}
