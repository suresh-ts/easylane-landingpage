import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";
import { FaHandHoldingDollar } from "react-icons/fa6";

const partnerItems = [
  {
    title: "Entrepreneurship opportunity",
    body:
      "Easy Lane offers a platform for partners to grow as entrepreneurs, focusing on client acquisition and revenue without heavy operational tasks.",
    type: "user",
  },
  {
    title: "Exclusive dashboard access",
    body:
      "Partners receive a dedicated dashboard with real-time insights to manage performance, client interactions, and transactions effectively.",
    type: "monitor",
  },
  {
    title: "Revenue sharing model",
    body:
      "Our tiered revenue-sharing model provides high earning potential, rewarding partners based on their sales performance and growth.",
    type: "money",
  },
];

export default function ChannelPartner() {
  return (
    <section id="channel-partner" className="section-width py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="space-y-6">
          <div>
            <span className="inline-flex rounded-lg border border-[#E6DDFE] px-4 py-2 text-sm font-semibold text-[#824DEB]">
              Our Channel Partner
            </span>
            <h2 className="mt-4">
              Partner with Us for{" "}
              <span className="text-[#824DEB]">Growth</span> and{" "}
              <span className="text-[#824DEB]">Success</span>
            </h2>
            <p className="mt-3 text-[#2F2F2F]">
              Join a partnership designed to empower your business with
              strategic insights, operational support, and a scalable revenue
              model, helping you achieve lasting success.
            </p>
          </div>
          <div className="space-y-6">
            {partnerItems.map((item) => {
              return (
                <div
                  key={item.title}
                  className="group flex items-center justify-between gap-6 rounded-3xl bg-[#F6F5FF] px-7 py-6"
                >
                  <div className="flex-1">
                    <h5 className="text-[#1F1F1F] transition-colors duration-300 group-hover:text-[#824DEB]">
                      {item.title}
                    </h5>
                    <p className="text-[#2F2F2F]">{item.body}</p>
                  </div>
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-3xl bg-white text-[#824DEB] shadow-sm transition-colors duration-300 group-hover:bg-[#824DEB]">
                    {item.type === "user" ? (
                      <HiOutlineUser className="h-6 w-6 transition-colors duration-300 group-hover:text-white" />
                    ) : item.type === "monitor" ? (
                      <FiMonitor className="h-6 w-6 transition-colors duration-300 group-hover:text-white" />
                    ) : item.type === "money" ? (
                      <FaHandHoldingDollar className="h-6 w-6 transition-colors duration-300 group-hover:text-white" />
                    ) : (
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={28}
                        height={28}
                        className="icon-purple transition duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/channel/channel.jpeg"
            alt="Channel partner logistics"
            width={720}
            height={860}
            className="h-auto w-full max-w-[520px] rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
