import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SlidePricing() {
  const [selected, setSelected] = useState("M");

  return (
    <section className="w-full text-black bg-white px-4 lg:px-8 py-12 lg:py-24 relative overflow-hidden">
      <Heading selected={selected} setSelected={setSelected} />
      <PriceCards selected={selected} />
      <TopLeftCircle />
      <BottomRightCircle />
    </section>
  );
}

const SELECTED_STYLES = "text-white font-medium rounded-lg py-3 w-28 relative";
const DESELECTED_STYLES =
  "font-medium rounded-lg py-3 w-28 hover:bg-slate-100 transition-colors relative";

const Heading = ({ selected, setSelected }) => {
  return (
    <div className="mb-12 lg:mb-24 relative z-10">
      <h3 className="font-semibold text-5xl lg:text-7xl text-center mb-6">
        Lift You Up - Pricing Plans
      </h3>
      <p className="text-center mx-auto max-w-lg mb-8">
        Choose a plan that fits your business needs. Our scalable solutions
        empower your operations, drive growth, and revolutionize engagement.
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setSelected("M")}
          className={selected === "M" ? SELECTED_STYLES : DESELECTED_STYLES}>
          Monthly
          {selected === "M" && <BackgroundShift />}
        </button>
        <div className="relative">
          <button
            onClick={() => setSelected("A")}
            className={selected === "A" ? SELECTED_STYLES : DESELECTED_STYLES}>
            Annual
            {selected === "A" && <BackgroundShift />}
          </button>
          <CTAArrow />
        </div>
      </div>
    </div>
  );
};

const BackgroundShift = () => (
  <motion.span
    layoutId="bg-shift"
    className="absolute inset-0 bg-black rounded-lg -z-10"
  />
);

const CTAArrow = () => (
  <div className="absolute -right-[100px] top-2 sm:top-0">
    <motion.svg
      width="95"
      height="62"
      viewBox="0 0 95 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="scale-50 sm:scale-75"
      initial={{ scale: 0.7, rotate: 5 }}
      animate={{ scale: 0.75, rotate: 0 }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeOut",
      }}>
      <path
        d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825"
        stroke="#7D7BE5"
        strokeWidth="3"
      />
      <path
        d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289"
        stroke="#7D7BE5"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
    <span className="block text-xs w-fit bg-indigo-500 text-white shadow px-1.5 py-0.5 rounded -mt-1 ml-8 -rotate-2 font-light italic">
      Save $$$
    </span>
  </div>
);

const PriceCards = ({ selected }) => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full max-w-6xl mx-auto relative z-10">
    {/* FREE */}
    <div className="w-full bg-white p-6 border-[1px] border-slate-300 rounded-xl">
      <p className="text-2xl font-bold mb-2">Free</p>
      <p className="text-lg mb-6">Everything to start</p>
      <p className="text-6xl font-bold mb-8">
        $0<span className="font-normal text-xl">/month</span>
      </p>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">10,000 requests/month</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">Basic in app support</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">2 users on your account</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">1 workspace</span>
      </div>

      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className="w-full py-4 mt-8 font-semibold bg-black text-white rounded-lg uppercase">
        Sign up free
      </motion.button>
    </div>

    {/* PRO  */}
    <div className="w-full bg-white p-6 border-[1px] border-slate-300 rounded-xl">
      <p className="text-2xl font-bold mb-2">Professional</p>
      <p className="text-lg mb-6">Everything to launch</p>
      <div className="overflow-hidden mb-8">
        <AnimatePresence mode="wait">
          {selected === "M" ? (
            <motion.p
              key="monthly1"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-6xl font-bold text-indigo-500">
              <span>$49</span>
              <span className="font-normal text-xl">/month</span>
            </motion.p>
          ) : (
            <motion.p
              key="monthly2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-6xl font-bold text-indigo-500">
              <span>$39</span>
              <span className="font-normal text-xl">/month</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">100,000 requests/month</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">Email in app support</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">10 users on your account</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">10 work spaces</span>
      </div>

      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className="w-full py-4 mt-8 font-semibold bg-indigo-500 text-white rounded-lg uppercase">
        Sign up professional
      </motion.button>
    </div>

    {/* ENTERPRISE */}
    <div className="w-full bg-white p-6 border-[1px] border-slate-300 rounded-xl">
      <p className="text-2xl font-bold mb-2">Enterprise</p>
      <p className="text-lg mb-6">Everything to go public</p>
      <div className="overflow-hidden mb-8">
        <AnimatePresence mode="wait">
          {selected === "M" ? (
            <motion.p
              key="yearly1"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-6xl font-bold">
              <span>$499</span>
              <span className="font-normal text-xl">/month</span>
            </motion.p>
          ) : (
            <motion.p
              key="yearly2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className="text-6xl font-bold">
              <span>$399</span>
              <span className="font-normal text-xl">/month</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">10,000,000 requests/month</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">Phone support</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">∞ users on your account</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0">
          <path
            d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
            fill="black"
          />
        </svg>
        <span className="text-base">∞ work spaces</span>
      </div>

      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className="w-full py-4 mt-8 font-semibold bg-black text-white rounded-lg uppercase">
        Sign up enterprise
      </motion.button>
    </div>
  </div>
);

const TopLeftCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[450px] h-[450px] rounded-full border-2 border-slate-500 border-dotted absolute z-0 -left-[250px] -top-[200px]"
    />
  );
};

const BottomRightCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "-360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[450px] h-[450px] rounded-full border-2 border-slate-500 border-dotted absolute z-0 -right-[250px] -bottom-[200px]"
    />
  );
};
