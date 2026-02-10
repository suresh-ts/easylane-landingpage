import Image from "next/image";
import { IoPeopleOutline } from "react-icons/io5";

const solutions = [
  {
    title: "Technology Integration",
    body:
      "Easy Lane uses technology to optimize routes, loads, and vendor management, providing real-time visibility and streamlined logistics operations.",
    icon: "/solution/s1.svg",
  },
  {
    title: "Return Load Optimization",
    body:
      "Easy Lane boosts earnings for fleet owners by optimizing return loads and cutting costs for shippers, ensuring efficient vehicle use.",
    icon: "/solution/s2.svg",
  },
  {
    title: "Driver Incentives",
    body:
      "Easy Lane provides incentives to drivers, improving morale and strengthening relationships between fleet owners and shippers.",
    type: "icon",
  },
  {
    title: "Fleet Owner Management",
    body:
      "Easy Lane empowers fleet owners with timely payments and tools to optimize operations, increasing earnings and business growth.",
    icon: "/solution/s3.svg",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="w-full bg-[#0b0226] padding-bottom">
      <div className="section-width">
        <div className="text-center text-white">
          <span className="inline-flex rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
            Our Solution
          </span>
          <h2 className="mt-5 text-white">
            Smart Solutions for{" "}
            <span className="text-[#824DEB]">Streamlined Logistics</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Optimize operations with cutting-edge technology, load management,
            driver incentives, and tools for fleet growth
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-start gap-4 rounded-2xl bg-[#1A1230] px-6 py-7 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                {item.type === "icon" ? (
                  <IoPeopleOutline className="h-6 w-6 text-white" />
                ) : (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="brightness-0 invert"
                  />
                )}
              </div>
              <div>
                <h5 className="mb-2 text-white">{item.title}</h5>
                <p className="text-white/70">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
