import Image from "next/image";

const navItems = [
  "About Us",
  "Our Technology",
  "Product Overview",
  "Our Solution",
  "Channel Partner",
  "Our Team",
  "Career",
  "Contact Us",
];

export default function Navbar() {
  return (
    <header className="border-b border-black/10">
      <div className="section-width flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Easy Lane"
            width={100}
            height={100}
            className="h-12 w-auto"
            priority
          />
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-[#1E1E2F] md:text-sm">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors hover:text-[#6A5AE0]"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
