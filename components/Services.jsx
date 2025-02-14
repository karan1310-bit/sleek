import React from 'react'
import { projects } from './data'
import Card from './parallex/Card'

const Services = () => {
  return (
    <main className="sm:mb-[30vh] sm:mt-[30vh]">
      {projects.map((project, i) => {
        return <Card key={`p_${i}`} {...project} i={i} />;
      })}
    </main>
  );
};

export default Services