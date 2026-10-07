import occasionPages from "@/lib/occasion-pages.json";
import devotionalContent from "@/lib/devotional-content.json";
import ziyaratIndex from "@/lib/ziyarat-index.json";

export default function sitemap() {
  const base = "https://www.kadameziyarat.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/packages/iraq",
    "/packages/iran",
    "/packages/combined",
    "/packages/arbaeen",
    "/destinations",
    "/faq",
    "/contact",
    "/terms",
    "/privacy",
  ];
  const existingEntries = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/packages") ? 0.9 : 0.7,
  }));
  const additions = [
    { path: "/ziyarat-occasions", kind: "directory" },
    ...occasionPages,
  ].map((page) => ({
    url: `https://www.kadameziyarat.com${page.path}`,
    lastModified: new Date("2026-10-06"),
    changeFrequency: "monthly",
    priority: page.kind === "package" ? 0.8 : 0.6,
  }));
  const devotionalEntries = [
    ...["duas", "tasbih", "amaal"].map((section) => ({ path: `/${section}` })),
    ...devotionalContent,
  ].map((page) => ({
    url: `${base}${page.path}`,
    lastModified: new Date("2026-10-07"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  const ziyaratEntries = [{ path: "/ziyarat" }, ...ziyaratIndex].map((page) => ({
    url: `${base}${page.path}`,
    lastModified: new Date("2026-10-07"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...existingEntries, ...additions, ...devotionalEntries, ...ziyaratEntries];
}
