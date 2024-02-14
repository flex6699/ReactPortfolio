import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { MdSearch } from "react-icons/md";
import ProjectItem from "../components/ProjectItem";
import ProjectInfo from "../assets/data/projects";
import { motion } from "framer-motion/dist/framer-motion";
const ProjectsStyles = styled.div`
  padding-top: 10rem;
  .projects_allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects_searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects_searchBar input {
    width: 100%;
    font-size: 2rem;
    paddding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects_searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects_searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects_searchBar,
    .projects_searchBar form,
    .projects_searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
     useEffect(() => {
    // Set the title when the component mounts
    document.title = "Projects";

    
    if (searchText === "") return;

    setProjectData(() => {
      return ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      );
    });
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();

    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <motion.div
      inital={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <ProjectsStyles>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of my recent works"
          />
          <div className="projects_searchBar ">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon"></MdSearch>
            </form>
          </div>
          <div className="projects_allItems">
            {projectData &&
              projectData.map((item) => (
                <ProjectItem
                  key={item.id}
                  title={item.name}
                  desc={item.desc}
                  img={item.img}
                  path={item.path}
                />
              ))}
          </div>
        </div>
      </ProjectsStyles>
    </motion.div>
  );
}
