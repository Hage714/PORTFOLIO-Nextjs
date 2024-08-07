"use client";
import React, { useTransition, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import Image from "next/image";
import TabButton from "./TabButton";

const skillsData = [
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 85 },
  { name: "Next.js", percentage: 80 },
  { name: "Node.js", percentage: 85 },
  { name: "CSS", percentage: 95 },
  { name: "Express", percentage: 85 },

  // Add more skills as needed
];

const skillVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const About = () => {
const [tab, setTab] = useState("skills");
    const [isPending, startTransition ] = useTransition();

const handleTabChange = (id) => {  //updating state without blocking UI
    startTransition(() => {
        setTab(id);
    });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
              <div ref={ref} className="space-y-4">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={skillVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
 className={`w-full bg-slate-400 rounded-full h-3 relative `}
                >
                    <div className="absolute left-0 -top-6 text-black font-semibold text-sm">
                      {skill.name}
                    </div>
                    <div className="absolute right-0 -top-6 text-black font-semibold text-sm ">
                      {skill.percentage}%
                    </div>
                    <div
                      className="bg-blue-600 h-3 rounded-full "
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </motion.div>
                ))}
              </div>
            )
        },
        {
            title: "Education",
            id: "education",
            content: (
                <ul className="list-disc pl-2">
                    <li>Bsc. in Computer Science</li>
                    <li>HCIA</li>
                    <li>Software Develeopment Bootcamp</li>
                </ul>
            )
        },
        {
            title: "Certifications",
            id: "certifications",
            content: (
                <ul className="list-disc pl-2">
                    <li>Google IT Support (Coursera)</li>
                    <li>Huawei Networks</li>
                    <li>JavaScript</li>
                </ul>
            )
        }
    ]


  return (
    <>
    <Navbar />
    <section className="text-black mt-0">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 sm:py-16 px-4 ">
              <div className="md:w-full">
        <Image
          src={"/images/tech2.jpg"}
          width={500}
          height={500}
          alt="tech" className="w-full"
        />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <h2 className="text-xl text-blue-600 font-bold">Software Developer</h2>
          <p className="text-base lg:text-lg">
              As a passionate software developer with a strong foundation in both front-end and back-end technologies, I am dedicated to crafting innovative solutions that drive user engagement and streamline business processes. With experience spanning JavaScript, React, Next.js, Express and Node.js, I thrive in dynamic environments where creativity and technical prowess intersect.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
            selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >Skills</TabButton>

                      <TabButton
                          selectTab={() => handleTabChange("education")}
                          active={tab === "education"}
                      >Education</TabButton>

                      <TabButton
                          selectTab={() => handleTabChange("certifications")}
                          active={tab === "certifications"}
                      >Certifications</TabButton>
            
          </div>
          <div className="mt-8">
{TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
