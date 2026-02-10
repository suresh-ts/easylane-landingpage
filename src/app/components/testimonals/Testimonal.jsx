import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Partnering with Easy Lane has streamlined our logistics operations, reducing costs and improving delivery efficiency. Their technology-driven solutions have been a game-changer for our business.",
    name: "Satish Sharma",
    role: "CEO-Kanodia Cement",
    rating: 4.5,
  },
  {
    quote:
      "Easy Lane has empowered me to become an entrepreneur, providing the tools and support needed to grow my logistics business independently.",
    name: "Maliram Swami",
    role: "Channel Partner-Rajasthan",
    rating: 5,
  },
  {
    quote:
      "Easy Lane ne mere financial maamlon ko sudharne ke saath-saath mujhe zyada vyapar dilane mein madad ki hai.",
    name: "Mehraj",
    role: "Driver-Sikandarabad",
    rating: 5,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`full-${index}`} className="h-4 w-4" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="h-4 w-4" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="h-4 w-4 text-[#D8DCE6]" />
      ))}
    </>
  );
};

const Testimonal = () => {
  return (
    <section className="bg-[#F6F5FF]">
      <div className="section-width padding-top padding-bottom">
        <div className="mx-auto max-w-3xl text-center">
          <h6 className="inline-flex items-center justify-center">
            Client Testimonials
          </h6>
          <h3 className=" font-semibold text-[#0A0226] mb-3">
            Success Stories from Our Partners
          </h3>
          <p className="mx-auto max-w-2xl">
            Hear from our clients &amp; partners on how Easy Lane has
            streamlined their operations and helped their businesses thrive.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white px-8 py-8 "
            >
              <p className="text-[#0A0226] sm:min-h-[140px]">{item.quote}</p>
              <div
                className="mt-6 flex gap-1 text-[#F0B249]"
                aria-label={`Rating: ${item.rating} out of 5`}
              >
                {renderStars(item.rating)}
              </div>
              <div className="mt-6">
                <h5 className="mb-1 text-[18px] font-semibold text-[#0A0226]">
                  {item.name}
                </h5>
                <p className="text-[15px] text-[#0A0226]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
