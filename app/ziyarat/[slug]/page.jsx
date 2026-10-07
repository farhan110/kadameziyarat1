import { notFound } from "next/navigation";
import ZiyaratPage from "@/components/ZiyaratPage";
import { getZiyarat, ziyaratIndex, ziyaratMetadata } from "@/lib/ziyarat";

export const dynamicParams = false;
export function generateStaticParams() {
  return ziyaratIndex.map((entry) => ({ slug: entry.slug }));
}
export async function generateMetadata({ params }) {
  const entry = await getZiyarat(params.slug);
  if (!entry) notFound();
  return ziyaratMetadata(entry);
}
export default async function RecitationPage({ params }) {
  const entry = await getZiyarat(params.slug);
  if (!entry) notFound();
  return <ZiyaratPage entry={entry} />;
}
