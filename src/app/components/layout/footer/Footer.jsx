import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Easylane-Lane/pfbid0xRYqfgfUsZS8hWeQ8m6ryjGEmjJ4TQZ8sDgY3Rcn6CTPhqhThhKyyn8xfy4JQPxol/?sk=about",
    icon: FaFacebookF,
  },
  {
    label: "X",
    href: "https://x.com/EasyLane_In?t=u8B6Xe_mIngrE7hqyZi5Ig&s=08",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/easylane_official_?utm_source=qr&igsh=ZGtlbWZ1dG5jNTh5",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/easylane",
    icon: FaLinkedinIn,
  },
];

const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-white ${className}`.trim()}>
      <div className="section-width  text-center padding-top pb-6">
        <div className="flex justify-center">
          <Image
            src="/logo.svg"
            alt="Easy Lane"
            width={1000}
            height={1000}
            className="h-20 w-auto"
          />
        </div>

        <p className="mt-6 footer-font text-[26px] font-medium text-[#834deb] md:text-[30px]">
          Hatao Logistics Ka Pain
        </p>

        <div className="mt-8 flex flex-col items-center gap-2 text-[#1E1E2F]">
          <h4 className="text-[16px] vietnam font-semibold">Get in touch</h4>
          <div className="flex items-center gap-2 text-[15px] text-[#4B4B6A]">
            <span aria-hidden="true" className="text-xl" >•</span>
            <a
              href="mailto:info@easylane.co.in"
              className="transition-colors hover:text-[#834deb]"
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
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F3F1FF] text-[#7B61FF] transition-colors hover:bg-[#E8E3FF]"
            >
              <item.icon className="h-5 w-5" />
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
