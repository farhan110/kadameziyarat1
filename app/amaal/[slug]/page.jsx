import { notFound } from "next/navigation";
import DevotionalPage from "@/components/DevotionalPage";
import { devotionalContent, devotionalMetadata } from "@/lib/devotional";

const section = "amaal";
export const dynamicParams = false;
export function generateStaticParams() {
  return devotionalContent.filter((entry) => entry.section === section).map((entry) => ({ slug: entry.slug }));
}
function getEntry(slug) {
  return devotionalContent.find((entry) => entry.section === section && entry.slug === slug);
}
export function generateMetadata({ params }) {
  const entry = getEntry(params.slug);
  if (!entry) notFound();
  return devotionalMetadata(entry.title, entry.description, entry.path);
}
export default function RecitationPage({ params }) {
  const entry = getEntry(params.slug);
  if (!entry) notFound();
  return <DevotionalPage entry={entry} />;
}
