import { notFound } from "next/navigation";
import OccasionPage from "@/components/OccasionPage";
import { occasionPages, getOccasionPage, occasionMetadata } from "@/lib/occasion-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return occasionPages.filter((page) => page.kind === "package").map((page) => ({ occasion: page.slug }));
}

export function generateMetadata({ params }) {
  const page = getOccasionPage(params.occasion, "package");
  if (!page) notFound();
  return occasionMetadata(page);
}

export default function PackageOccasionPage({ params }) {
  const page = getOccasionPage(params.occasion, "package");
  if (!page) notFound();
  return <OccasionPage page={page} />;
}
