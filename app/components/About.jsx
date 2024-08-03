"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const About = () => {
const [tab, setTab] = useState("skills");
    const [isPending, startTransition ] = useTransition();

const handleTabChange = (id) => {  //updating state without blocking UI
    startTransition(() => {
        setTab(id);
    });
  };

    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <ul className="list-disc pl-2">
                    <li>Express</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                </ul>
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
                    <li>Google Certs</li>
                    <li>Huawei Networks</li>
                    <li>JavaScript</li>
                </ul>
            )
        }
    ]


  return (
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
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            libero in mauris tristique efficitur. Sed vel felis vel libero
            viverra vulputate. Nulla facilisi. Sed quis condimentum neque, vel
            lobortis lectus. Donec vel dui vel ipsum placerat consectetur. Nulla
            facilisi.
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
  );
};

export default About;
