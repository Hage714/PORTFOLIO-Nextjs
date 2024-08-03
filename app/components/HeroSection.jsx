"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className="col-span-8 place-self-center text-center sm:text-left justify-self-start ">
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-300">
              Hello, I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Hage",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />{" "}
          </h1>
          <p className="text-gray-800 text-base sm:text-lg lg:text-xl mb-6">
            I am a software engineer. I play with codes and spend 25 hours per
            day debugging one line of code that I have written in 1 hour.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 text-black bg-gradient-to-br from-blue-800 via-blue-500 to-blue-200 hover:from-slate-300 hover:via-slate-400 hover:to-slate-500 w-full sm:w-fit ">
              Hire Me
            </button>
            <button className="px-1 py-1 mt-4 rounded-full text-gray-800 bg-gradient-to-br from-blue-800 via-blue-500 to-blue-200 hover:from-slate-300 hover:via-slate-400 hover:to-slate-500 w-full sm:w-fit">
              <span className="block bg-slate-400 hover:bg-slate-200 rounded-full px-5 py-2">
                {" "}
                Download CV{" "}
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-4 flex justify-center items-center mt-4 lg:mt-0">
          <div className="rounded-full bg-slate-400 w-[300px] h-[300px] lg:w-[320px] lg:h-[320px] flex justify-center items-center overflow-hidden">
            <div className="relative w-[200px] h-[200px]">
              <Image
                src="/images/hero.jpg"
                layout="fill"
                objectFit="cover"
                alt="hero"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
