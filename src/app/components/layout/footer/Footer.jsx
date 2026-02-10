import Image from "next/image";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M13.5 9H16V6.5C16 5.12 14.88 4 13.5 4H11.5C10.12 4 9 5.12 9 6.5V9H7V12H9V20H12V12H14.5L15 9H12V6.75C12 6.34 12.34 6 12.75 6H13.5V9Z"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M18.5 4H15L12 8.5L9 4H5.5L10.2 11L5 20H8.5L12 14L15.5 20H19L13.8 11L18.5 4Z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M6.5 9H4V20H6.5V9ZM5.25 4C4.56 4 4 4.56 4 5.25C4 5.94 4.56 6.5 5.25 6.5C5.94 6.5 6.5 5.94 6.5 5.25C6.5 4.56 5.94 4 5.25 4ZM20 14.2C20 11.73 18.56 10 16.44 10C15.27 10 14.36 10.63 13.9 11.5H13.86V10.2H11.5V20H14V14.9C14 13.55 14.82 12.7 15.98 12.7C17.06 12.7 17.5 13.45 17.5 14.9V20H20V14.2Z"
        />
      </svg>
    ),
  },
];

const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-white ${className}`.trim()}>
      <div className="section-width  text-center md:py-20">
        <div className="flex justify-center">
          <Image
            src="/logo.svg"
            alt="Easy Lane"
            width={90}
            height={90}
            className="h-12 w-auto"
          />
        </div>

        <p className="mt-6 font-belgrano text-[26px] font-medium text-[#7B61FF] md:text-[30px]">
          Hatao Logistics Ka Pain
        </p>

        <div className="mt-8 flex flex-col items-center gap-2 text-[#1E1E2F]">
          <p className="text-[16px] font-semibold">Get in touch</p>
          <div className="flex items-center gap-2 text-[15px] text-[#4B4B6A]">
            <span aria-hidden="true">•</span>
            <a
              href="mailto:info@easylane.co.in"
              className="transition-colors hover:text-[#7B61FF]"
            >
              info@easylane.co.in
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F3F1FF] text-[#7B61FF] transition-colors hover:bg-[#E8E3FF]"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 text-[14px] text-[#4B4B6A]">
          Powered By Easylane
        </div>
      </div>
    </footer>
  );
};

export default Footer;
