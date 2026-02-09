import Image from "next/image";

const techItems = [
  {
    title: "Return Load Optimizer",
    body:
      "Easy Lane's return load optimizer helps fleet owners boost vehicle usage and profits by securing return trips. It cuts costs by optimizing routes for both outgoing and return loads, increasing overall efficiency.",
    icon: "/technology/tech-1.svg",
  },
  {
    title: "Visibility",
    body:
      "Easy Lane's truck tracking system offers real-time visibility, providing timely updates and improved security. This ensures constant monitoring and supports streamlined logistics operations for better efficiency.",
    icon: "/technology/tech-2.svg",
  },
  {
    title: "Load and Route Optimizer",
    body:
      "Easy Lane's load and route optimizer maximizes vehicle capacity, reduces travel time, and significantly enhances route efficiency for optimal overall performance.",
    icon: "/technology/tech-3.svg",
  },
  {
    title: "Driver App",
    body:
      "The Driver App delivers real-time updates, route plans, and easy navigation. It supports electronic Proof of Delivery (ePOD) and provides benefits like fuel discounts, insurance, and performance rewards.",
    icon: "/technology/tech-4.svg",
  },
];

export default function Technology() {
  return (
    <section className="section-width py-16 md:py-24">
      <div className="rounded-[32px] bg-[#F6F5FF] px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-lg border border-[#E6DDFE] px-4 py-2 text-sm font-semibold text-[#7A63E8]">
            Our Technology
          </span>
          <h2 className="mt-5">
            Efficient <span className="text-[#7A63E8]">Logistics</span> Through{" "}
            <span className="text-[#7A63E8]">Innovative Technology</span>
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white px-6 py-10 text-center shadow-sm"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3F1FF]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                />
              </div>
              <h5 className="mb-3 text-[#1F1F1F]">{item.title}</h5>
              <p className="text-[#2F2F2F]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
