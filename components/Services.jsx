
import { projects } from './data'
import Card from './parallex/Card'
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <main ref={container} className="font-variable sm:mt-[8vh]">
      {projects.map((project, i) => {
        const targetScale = 1 - ( (projects.length - i) * 0.05);
        return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
      })}
    </main>
  );
};

export default Services