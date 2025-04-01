import React, { useState } from "react";
import Project from "./projects/Project";
import Modal from "./projects/Modal";

const projects = [
  {
    title: "Disco Den",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Color Vibe",
    src: "officestudio.png",
    color: "#000000",
  },
  {
    title: "DreamDay",
    src: "locomotive.png",
    color: "#000000",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#000000",
  },
];

const Showcase = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="flex min-h-fit md:min-h-screen mt-8 sm:mt-0 lg:pt-[7vh] items-center justify-center overflow-hidden px-6 md:px-8">
    <div className="w-full font-variable max-w-[100%] lg:max-w-none lg:w-[75%] flex flex-col items-center justify-center gap-4 sm:gap-0">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>

      <Modal modal={modal} projects={projects} />
    </main>
  );
};

export default Showcase;
