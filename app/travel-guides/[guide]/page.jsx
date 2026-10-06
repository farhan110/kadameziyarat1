import { notFound } from "next/navigation";
import OccasionPage from "@/components/OccasionPage";
import { occasionPages, getOccasionPage, occasionMetadata } from "@/lib/occasion-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return occasionPages.filter((page) => page.kind === "guide").map((page) => ({ guide: page.slug }));
}

export function generateMetadata({ params }) {
  const page = getOccasionPage(params.guide, "guide");
  if (!page) notFound();
  return occasionMetadata(page);
}

export default function TravelGuidePage({ params }) {
  const page = getOccasionPage(params.guide, "guide");
  if (!page) notFound();
  return <OccasionPage page={page} />;
}
