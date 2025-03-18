import React, { useState } from "react";
import Project from "./projects/Project";
import Modal from "./projects/Modal";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

const Showcase = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="flex min-h-fit md:min-h-screen pt-[6vh] lg:pt-[20vh] items-center justify-center overflow-hidden px-[20px]">
    <div className="w-full font-variable max-w-[90%] lg:max-w-none lg:w-[1000px] flex flex-col items-center justify-center">
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
