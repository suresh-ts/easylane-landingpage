"use client";

import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useEffect, useMemo, useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [countries, setCountries] = useState([]);
  const [countryLoading, setCountryLoading] = useState(true);
  const [countryError, setCountryError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDialCode, setSelectedDialCode] = useState("");
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  useEffect(() => {
    let isMounted = true;
   
    const loadCountries = async () => {
      try {
        setCountryLoading(true);
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd,cca2"
        );
        if (!res.ok) throw new Error("Failed to fetch countries");
        const data = await res.json();
        if (!isMounted) return;

        const sorted = data
          .filter((item) => item?.name?.common)
          .sort((a, b) =>
            a.name.common.localeCompare(b.name.common, "en", {
              sensitivity: "base",
            })
          );

        setCountries(sorted);

        const india = sorted.find((item) => item?.cca2 === "IN");
        const initial = india || sorted[0];
        if (initial) {
          setSelectedCountry(initial.cca2 || "");
          const dial = getDialCode(initial);
          setSelectedDialCode(dial);
        }
        setCountryError("");
      } catch (err) {
        if (!isMounted) return;
        setCountryError("Unable to load countries.");
      } finally {
        if (isMounted) setCountryLoading(false);
      }
    };

    loadCountries();

    return () => {
      isMounted = false;
    };
  }, []);

  const getDialCode = (country) => {
    if (!country?.idd?.root) return "";
    const suffixes = Array.isArray(country.idd.suffixes)
      ? country.idd.suffixes
      : [];
    if (!suffixes.length) return country.idd.root;
    const suffix = suffixes[0] ?? "";
    return `${country.idd.root}${suffix}`;
  };

  const dialOptions = useMemo(
    () =>
      countries
        .map((item) => ({
          code: item?.cca2,
          name: item?.name?.common,
          dial: getDialCode(item),
        }))
        .filter((item) => item.name && item.dial),
    [countries]
  );

  const handleCountryChange = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
    const match = countries.find((item) => item.cca2 === value);
    if (match) {
      setSelectedDialCode(getDialCode(match));
    }
  };

  const handleDialChange = (event) => {
    setSelectedDialCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus(null);

    if (!TEMPLATE_ID) {
      setSubmitStatus({
        type: "error",
        message: "Email template ID is missing. Please add it and try again.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setSubmitStatus({
        type: "success",
        message: "Thanks! Your message has been sent.",
      });
      formRef.current?.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Unable to send right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="section-width py-16 md:py-24">
<div className="grid overflow-hidden rounded-[24px] bg-[#F6F5FF] lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-10">
        <div className="px-6 py-10 md:px-10 md:py-14">
          <h6 className="inline-flex items-center justify-center">Contact Us</h6>
          <h3 className="mt-2  font-semibold text-[#0A0226] md:text-[40px]">
            Get in Touch with Easy Lane
          </h3>
          <p className="mt-4 max-w-md text-[#0A0226]">
            Have questions about partnering with us or want to learn more about
            how Easy Lane can help you grow your business? We&apos;re here to
            help!
          </p>

          <form ref={formRef} className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-[14px] font-semibold text-[#0A0226]">
                Name of Channel Partner
              </label>
              <input
                type="text"
                name="partner_name"
                placeholder="Name of Channel Partner"
                className="mt-2 w-full rounded-lg border border-[#E1E4ED] bg-white px-4 py-3 text-[15px] text-[#0A0226] placeholder:text-[#8D93A5] focus:border-[#B8A6FF] focus:outline-none focus:ring-2 focus:ring-[#E6DDFE]"
              />
            </div>

            <div>
              <label className="text-[14px] font-semibold text-[#0A0226]">
                Firm Name
              </label>
              <input
                type="text"
                name="firm_name"
                placeholder="Firm Name"
                className="mt-2 w-full rounded-lg border border-[#E1E4ED] bg-white px-4 py-3 text-[15px] text-[#0A0226] placeholder:text-[#8D93A5] focus:border-[#B8A6FF] focus:outline-none focus:ring-2 focus:ring-[#E6DDFE]"
              />
            </div>

            <div>
              <label className="text-[14px] font-semibold text-[#0A0226]">
                Country
              </label>
              <div className="relative mt-2">
                <select
                  name="country_code"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="w-full appearance-none rounded-lg border border-[#E1E4ED] bg-white px-4 py-3 pr-12 text-[15px] text-[#0A0226] focus:border-[#B8A6FF] focus:outline-none focus:ring-2 focus:ring-[#E6DDFE]"
                >
                  {countryLoading && (
                    <option value="">Loading countries...</option>
                  )}
                  {countryError && <option value="">{countryError}</option>}
                  {!countryLoading &&
                    !countryError &&
                    countries.map((item) => (
                      <option key={item.cca2} value={item.cca2}>
                        {item.name.common}
                      </option>
                    ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0A0226]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="text-[14px] font-semibold text-[#0A0226]">
                Phone Number
              </label>
              <div className="mt-2 flex gap-3">
                <div className="relative w-36">
                  <select
                    name="phone_code"
                    value={selectedDialCode}
                    onChange={handleDialChange}
                    className="w-full appearance-none rounded-lg border border-[#E1E4ED] bg-white px-3 py-3 pr-10 text-[15px] text-[#0A0226] focus:border-[#B8A6FF] focus:outline-none focus:ring-2 focus:ring-[#E6DDFE]"
                  >
                    {countryLoading && <option value="">Loading...</option>}
                    {!countryLoading &&
                      dialOptions.map((item) => (
                        <option
                          key={`${item.code}-${item.dial}`}
                          value={item.dial}
                        >
                          {item.dial} {item.name}
                        </option>
                      ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0A0226]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Mobile Number"
                  className="flex-1 rounded-lg border border-[#E1E4ED] bg-white px-4 py-3 text-[15px] text-[#0A0226] placeholder:text-[#8D93A5] focus:border-[#B8A6FF] focus:outline-none focus:ring-2 focus:ring-[#E6DDFE]"
                />
              </div>
            </div>

            <div>
              <label className="text-[14px] font-semibold text-[#0A0226]">
                Email Id
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                className="mt-2 w-full rounded-lg border border-[#E1E4ED] bg-white px-4 py-3 text-[15px] text-[#0A0226] placeholder:text-[#8D93A5] focus:border-[#B8A6FF] focus:outline-none focus:ring-2 focus:ring-[#E6DDFE]"
              />
            </div>

            <div>
              <label className="text-[14px] font-semibold text-[#0A0226]">
                Operation Area
              </label>
              <input
                type="text"
                name="operation_area"
                placeholder="Operation Area"
                className="mt-2 w-full rounded-lg border border-[#E1E4ED] bg-white px-4 py-3 text-[15px] text-[#0A0226] placeholder:text-[#8D93A5] focus:border-[#B8A6FF] focus:outline-none focus:ring-2 focus:ring-[#E6DDFE]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-lg bg-[#2F6BFF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#255BE0] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Form"}
            </button>
            {submitStatus && (
              <p
                className={`text-sm ${
                  submitStatus.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {submitStatus.message}
              </p>
            )}
          </form>
        </div>

        <div className="relative min-h-[320px] lg:min-h-full">
          <Image
            src="/home/form/form.jpg"
            alt="Contact Easy Lane"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
