import React from "react";
import Divider from "../Divider";
import Project from "./Project";
import dragazon from "../../assets/dragazon.png";
import { FaLock } from "react-icons/fa";

const projects = [
  {
    title: 'Rickest Rick',
    codeLink: 'https://github.com/alexrabin/RickestRick',
    projectLink: 'https://rickest-rick.vercel.app',
    imageLink: 'https://rickest-rick.vercel.app/apple-touch-icon.png',
    description: "View Characters, Episodes, and Locations from the TV show, Rick & Morty. Uses Next.js, MUI, & the Rick & Morty API."
  },
  {
    title: 'Happy Paws',
    codeLink: 'https://github.com/alexrabin/HappyPaws',
    projectLink: 'https://happypaws.vercel.app',
    imageLink: 'https://happypaws.vercel.app/apple-touch-icon.png',
    description: 'Your home for all your happy paws :) Uses Next.js and The Dog API.'
  },
  {
    title: 'native_drag_n_drop',
    codeLink: 'https://github.com/alexrabin/FlutterNativeDragAndDrop',
    projectLink: 'https://pub.dev/packages/native_drag_n_drop',
    imageLink: 'https://user-images.githubusercontent.com/15949910/150895221-6a4e58f8-4238-43e6-8549-4e626389985b.png',
    description: 'A package that allows developers to add native drag and drop support into their Flutter app.'
  },
  {
    title: 'Dragazon',
    codeLink: 'https://github.com/alexrabin/dragazon',
    imageLink: dragazon,
    description:' A store for all your dragon related needs! Dragazon is a MERN  e-commerce application created by Lonnie Mitchell, Chris Garrison, and I.'
  },
  {
    title: 'Password Generator',
    codeLink: 'https://github.com/alexrabin/password-generator',
    projectLink: 'https://alexrabin.github.io/password-generator/',
    imageIcon:<FaLock size={80} />,
    description:'A password generator built with React and Bootstrap.'
  },
]
export default function ProjectsSection({ styles }) {
  return (
    <div
      id="projects"
      className="mx-auto"
      style={{ width: "95%", marginTop: 50 }}
    >
      <div className="row justify-content-start align-items-center mb-4">
        <div className="col-md-7 col-lg-5">
          <h1 className={`${styles.textColor}`}>Some Things I've Built</h1>
        </div>
        <div className="col-md-5 col-lg-7">
          <Divider styles={styles} />
        </div>
      </div>
      <div id="the-projects">
        {projects.map((project, i) => {
          return <Project
          left={i % 2 === 0}
          styles={styles}
          title={project.title}
          codeLink={project.codeLink}
          projectLink={project.projectLink}
          imageLink={project.imageLink}
          imageIcon={project.imageIcon}
        >
          <p style={{ color: styles.accentTextColor }} className={`mono-font ${i % 2 === 0 ? 'text-start' : 'text-end'} w-100`}>
         {project.description}</p>
        </Project>
        })}
      </div>
    </div>
  );
}
