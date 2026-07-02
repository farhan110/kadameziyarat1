import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-night px-4 pt-24 text-center">
      <p className="font-display text-7xl gold-text">404</p>
      <h1 className="mt-4 font-display text-2xl text-ivory">Page Not Found</h1>
      <p className="mt-3 max-w-md text-sm text-sand">
        The page you are looking for does not exist. Let us guide you back to
        your journey.
      </p>
      <Link href="/" className="btn-gold mt-8 rounded-full px-8 py-3 text-sm">
        Return Home
      </Link>
    </section>
  );
}
