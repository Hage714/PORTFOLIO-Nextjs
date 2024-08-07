"use client";
import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    imgUrl: "/images/projects/tech3.jpg",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tag: ["All", "Nextjs"],
    gitUrl: "https://hage.com",
    previewUrl: "https://hage.com",
  },
  {
    id: 1,
    imgUrl: "/images/projects/tech4.jpg",
    title: "Project 2",
    description: "Donec vel ipsum vel nunc faucibus condimentum.",
    tag: ["All", "React"],
    gitUrl: "https://hage.com",
    previewUrl: "https://hage.com",
  },
  {
    id: 1,
    imgUrl: "/images/projects/tech5.jpg",
    title: "Project 3",
    description:
      "Nulla facilisi. Sed vulputate, mauris at consectetur finibus.",
    tag: ["All", "Nextjs"],
    gitUrl: "https://hage.com",
    previewUrl: "https://hage.com",
  },
  {
    id: 4,
    imgUrl: "/images/projects/tech6.jpg",
    title: "Project 2",
    description: "Donec vel ipsum vel nunc faucibus condimentum.",
    tag: ["All", "React"],
    gitUrl: "https://hage.com",
    previewUrl: "https://hage.com",
  },
  {
    id: 5,
    imgUrl: "/images/projects/tech7.jpg",
    title: "Project 2",
    description: "Donec vel ipsum vel nunc faucibus condimentum.",
    tag: ["All", "React"],
    gitUrl: "https://hage.com",
    previewUrl: "https://hage.com",
  },
  {
    id: 6,
    imgUrl: "/images/projects/tech8.jpg",
    title: "Project 2",
    description: "Donec vel ipsum vel nunc faucibus condimentum.",
    tag: ["All", "React"],
    gitUrl: "https://hage.com",
    previewUrl: "https://hage.com",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  //filtering out project once selected
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y:50, opacity: 0 },
    animate: { y:0, opacity: 1 }
  }

  return (
    <>
    <Navbar />
    <section>
      <h2 className="text-black text-center text-3xl font-bold mb-4">
        My Projects
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nextjs"
          isSelected={tag === "Nextjs"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li 
          key={index}
          variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"}
          transition={{duration: 0.3, delay: index* 0.4}}>
            <ProjectCard
              key={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
              tags={project} // this is an array of strings that will be rendered as tags in the ProjectCard component
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
    </>
  );
};

export default ProjectsSection;
