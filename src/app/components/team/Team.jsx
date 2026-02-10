import Image from "next/image";

const leadership = [
  {
    name: "Aryaman Shukla",
    role: "Co-Founder/Director",
    image: "/home/leaders/i1.jpg",
    linkedin:
      "https://www.linkedin.com/in/aryaman-shukla-8064a720b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Amit Tomar",
    role: "Head Operations",
    image: "/home/leaders/i2.jpg",
    linkedin: "https://www.linkedin.com/in/amit-tomar-4b3a29106/",
  },
];

const mentor = {
  name: "Vishal Kanodia",
  role: "Chairman - Kanodia Group of Companies",
  image: "/home/leaders/i3.jpg",
  linkedin: "https://www.linkedin.com/in/kanodiagroup/",
};

const Team = () => {
  return (
    <section id="team" className="bg-white">
      <div className="section-width py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h6 className="inline-flex items-center justify-center">Our Team</h6>
          <h3 className="font-semibold text-[#0A0226] mb-3">
            Meet the Visionaries at{" "}
            <span className="text-[#824DEB]">Easy Lane</span>
          </h3>
          <p className="mx-auto max-w-md">
            With years of industry experience, our leadership team is committed
            to delivering seamless logistics solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-14 md:grid-cols-2   lg:gap-0">
          {leadership.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col max-w-lg mx-auto items-center text-center transition-transform duration-500 hover:scale-[1.04] hover:-translate-y-1"
            >
              <div className="h-28 w-28 overflow-hidden rounded-full md:h-44 md:w-44">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <h5 className="mt-6 text-[18px] mb-2 font-semibold text-[#0A0226] transition-colors duration-300 group-hover:text-[#2575fc]">
                {member.name}
              </h5>
              <p className="text-[15px] text-[#0A0226]">{member.role}</p>
              <a
                className="mt-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#a1a1a1] text-[10px] font-semibold text-white"
                aria-label="LinkedIn"
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className=" font-semibold text-[#0A0226]">
            Our Mentor
          </h3>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-1">
            <div className="h-28 w-28 overflow-hidden rounded-full md:h-44 md:w-44">
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <h5 className="mt-6 text-[18px] mb-2 font-semibold text-[#0A0226] transition-colors duration-500 group-hover:text-[#2575fc]">
              {mentor.name}
            </h5>
            <p className="text-[15px] text-[#0A0226]">{mentor.role}</p>
            <a
              className="mt-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#a1a1a1] text-[10px] font-semibold text-white"
              aria-label="LinkedIn"
              href={mentor.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
