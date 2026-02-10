import Image from "next/image";

const Career = () => {
  return (
    <section id="career" className="section-width py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h6 className="inline-flex items-center justify-center">Career</h6>
          <h3 className="mt-3  font-semibold text-[#0A0226]">
            Join Our Team at EasyLane!
          </h3>
          <p className="mt-5 max-w-sm text-[#0A0226]">
            If you&apos;re driven by curiosity, inspired by challenges, and ready
            to shape the future, we&apos;d love to meet you. At EasyLane, you&apos;ll
            find a dynamic environment where your ideas matter, your skills can
            shine, and your career can thrive.
          </p>
          <p className="mt-5 max-w-sm text-[#0A0226]">
            Take the next step in your career with us. Email your resume and a
            bit about yourself to{" "}
            <span className="font-semibold text-[#0A0226]">
              career@easylane.co.in
            </span>
            , and let&apos;s start building something amazing together.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl">
            <Image
              src="/home/career/career.jpg"
              alt="Join the Easy Lane team"
              width={1000}
              height={1000}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
