import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <ul className="flexCenter flex w-full flex-col gap-5 lg:hidden">
      {NAV_LINKS.map(({ href, key, label }) => (
        <Link
          href={href}
          key={key}
          className="regular-16 flexCenter cursor-pointer border-b-2 py-1.5 text-gray-50 transition-all hover:border-b-gray-50 hover:font-bold"
        >
          {label}
        </Link>
      ))}
    </ul>
  );
}
