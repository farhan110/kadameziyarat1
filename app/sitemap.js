export default function sitemap() {
  const base = "https://kadameziyarat.com";
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
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/packages") ? 0.9 : 0.7,
  }));
}
