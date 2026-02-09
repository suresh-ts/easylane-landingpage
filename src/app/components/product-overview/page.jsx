import Image from "next/image";
import { AiOutlinePieChart } from "react-icons/ai";

const overviewItems = [
  {
    title: "Quality scores",
    body:
      "Easy Lane offers a powerful API that enables clients to efficiently connect and automate their logistics workflows, covering everything from order handling to real-time tracking, boosting overall operational effectiveness.",
    type: "icon",
  },
  {
    title: "Intuitive & User-Friendly Dashboard",
    body:
      "Easy Lane's platform includes a user-friendly dashboard, built for easy access to key logistics data, ensuring that even users with limited technical knowledge can efficiently manage and oversee their operations.",
    icon: "/po/po-2.svg",
  },
  {
    title: "Customisable Features & Reporting",
    body:
      "Easy Lane's platform lets users customize settings and reports, tailoring the interface to their logistics needs, while detailed analytics provide insights to support decision-making and boost efficiency.",
    icon: "/po/po-3.svg",
  },
];

export default function ProductOverview() {
  return (
    <section id="product-overview" className="section-width py-16 md:py-24">
      <div className="text-center">
        <span className="inline-flex rounded-lg border border-[#E6DDFE] px-4 py-2 text-sm font-semibold text-[#7A63E8]">
          Product Overview
        </span>
        <h2 className="mt-5">
          Streamlined <span className="text-[#7A63E8]">Logistics Management</span>{" "}
          with Easy Lane
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#2F2F2F]">
          Empower your operations with seamless API integration, an intuitive
          dashboard, and Customisable reporting tools for enhanced
          decision-making and efficiency.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-3">
        {overviewItems.map((item) => (
          <div key={item.title} className="group flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#F3F1FF] transition-colors duration-300 group-hover:bg-[#7A63E8]">
              {item.type === "icon" ? (
                <AiOutlinePieChart className="h-9 w-9 text-[#7A63E8] transition-colors duration-300 group-hover:text-white" />
              ) : (
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="icon-purple transition duration-300 group-hover:brightness-0 group-hover:invert"
                />
              )}
            </div>
            <div>
              <h5 className="mb-2 text-[#1F1F1F] transition-colors duration-300 group-hover:text-[#7A63E8]">
                {item.title}
              </h5>
              <p className="text-[#2F2F2F]">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
