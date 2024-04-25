

"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../ProjectsInfo";
;

function PortfolioSection() {
  return (
    <div id="portfolio" className="mt-40">
      <motion.h2
        className="text-center text-5xl font-extrabold mb-16 max-[425px]:text-3xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
      About Us
      </motion.h2>
      <div className="flex flex-wrap max-[850px]:flex-col max-[850px]:items-center">
        {projects.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div>
      




        {/* <figure class="wp-block-image size-large"><img fetchpriority="high" decoding="async" width="1024" height="576" src="https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1-1024x576.png" alt="" class="wp-image-419" srcset="https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1-1024x576.png 1024w, https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1-300x169.png 300w, https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1-768x432.png 768w, https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1-1536x864.png 1536w, https://talentzenith.com/wp-content/uploads/2023/09/clients-sep-2023-1.png 1920w" sizes="(max-width: 1024px) 100vw, 1024px"></figure> */}
    </div>
  );
}

export default PortfolioSection;
