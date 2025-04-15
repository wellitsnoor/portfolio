import React from "react";
import InfoCard from "./InfoCard";

const projects = [
  {
    title: "I dont have it",
    description: "This is a project is empty",
    image: "/via.placeholder.com/150",
  },
  {
    title: "I dont have it 2",
    description: "This is a project is empty",
    image: "/via.placeholder.com/150",
  },
  {
    title: "I dont have it 3",
    description: "This is a project is empty",
    image: "/via.placeholder.com/150",
  },
];

export default function Projects() {
  return (
    <div
      className="w-screen h-fit min-h-screen justify-center items-center flex flex-col"
      id="#about"
    >
      <p className="text-5xl font-bold text-bold">Projects</p>

      {/* projects */}
      {/* projects box */}
      <div className="flex w-screen justify-center">
        <div className="grid grid-flow-col gap-10 py-10 w-fit ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex justify-center items-center" // Center each InfoCard inside the grid cell
            >
              <InfoCard
                title1={project.title}
                des={project.description}
                position="50% 0%"
                image={"/banner.jpg"}
                animation={index == 0 ? "left" : index == 1 ? "center" : "right"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
