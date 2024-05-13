import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <ul className="flex flex-col flexCenter lg:hidden w-full gap-5">
      {NAV_LINKS.map(({ href, key, label }) => (
        <Link
          href={href}
          key={key}
          className="regular-16 text-gray-50 flexCenter cursor-pointer py-1.5 transition-all hover:font-bold border-b-2 hover:border-b-gray-50"
        >
          {label}
        </Link>
      ))}
    </ul>
  );
}
