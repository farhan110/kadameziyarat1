import DevotionalDirectory from "@/components/DevotionalDirectory";
import { devotionalMetadata, devotionalSections } from "@/lib/devotional";

const section = "tasbih";
const info = devotionalSections[section];
export const metadata = devotionalMetadata(info.title, info.description, `/${section}`);

export default function DirectoryPage() {
  return <DevotionalDirectory section={section} />;
}
