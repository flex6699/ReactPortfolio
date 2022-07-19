import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectImg from "../assets/images/projectImg.png";

const ProjectItemStyle = styled.div`
  .projectItem_img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem_info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem_title {
    font-size: 2.2rem;
  }
  .projectItem_desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem_img {
      height: 350px;
    }
  }
  .projectButton {
    display: inline-block;
    font-size: 1.8rem;
    text-decoration: underline;

    margin: 2rem 0;
    color: royalblue;
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = "Project Name",
  desc = "lorem epsum",
  link = "https://google.com",
}) {
  return (
    <ProjectItemStyle>
      <Link to="/projects" className="projectItem_img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem_info">
        <Link to="#">
          <h3 className="projectItem_title">{title}</h3>
        </Link>
        <p className="projectItem_desc">{desc}</p>
        {link && (
          <a className="projectButton" href={link}>
            Open Project
          </a>
        )}
      </div>
    </ProjectItemStyle>
  );
}
