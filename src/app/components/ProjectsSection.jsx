"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: " ACCELERATOR",
    description:"The Accelerator project involved the creation of a React landing page designed to streamline the management of HubSpot websites without the need for coding.",
    image: "/images/projects/fig.1.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Digital.art",
    description: " It is a centered on developing a ReactJS landing page enriched with enhanced JavaScript functionalities.",
    image: "/images/projects/Fig.2.png",
    tag: ["All", "Reactjs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Embrace",
    description: "This project was crafted with a specific focus on creating a sophisticated and data-driven web interface tailored for a marketing agency.",
    image: "/images/projects/Fig.3.png",
    tag: ["All", "Reactjs"],
    gitUrl: "/https://github.com/sindhueswar/Embrace",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "JADOO",
    description: "This Project is focused on the development of a captivating travel agency landing page. ",
    image: "/images/projects/Fig.4.png",
    tag: ["All", "Nextjs"],
    gitUrl: "https://github.com/sindhueswar/jadoo",
    previewUrl: "https://jadoo-9zvd.vercel.app/",
  },
  {
    id: 5,
    title: "Employee Details",
    description: "Yhis project is Developed with Nextjs Approuter and the data is stored in Mongodb",
    image: "/images/projects/fig.6.png",
    tag: ["All", "Nextjs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "LaslesVPN",
    description: "The landing page was characterized by extensive custom properties and stylish design elements, implemented using Tailwind CSS.",
    image: "/images/projects/Fig.5.png",
    tag: ["All", "Nextjs"],
    gitUrl: "https://github.com/sindhueswar/LaslesVPN",
    previewUrl: "https://lasles-vpn-sigma.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Reactjs"
          isSelected={tag === "Reactjs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nextjs"
          isSelected={tag === "Nextjs"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
