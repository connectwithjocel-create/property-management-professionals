import Link from "next/link";
import { Arrow } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="bg-cream py-28 md:py-40">
      <div className="wrap max-w-3xl">
        <p className="eyebrow">Page not found</p>
        <h1 className="display-xl mt-6">This page<br />has moved out.</h1>
        <p className="lead mt-6">The page you were looking for isn&apos;t here. Try one of these instead.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-dark">Home<Arrow /></Link>
          <Link href="/property-listed" className="btn-line text-ink">Rental properties</Link>
          <Link href="/vacation-rentals" className="btn-line text-ink">Vacation rentals</Link>
        </div>
      </div>
    </section>
  );
}
