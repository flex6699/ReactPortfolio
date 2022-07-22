import React from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import projects from "../assets/data/projects";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import Slide from "react-reveal/Slide";
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects_allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768) {
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 7rem;
    gap: 5rem;
    .projectItem_img {
      width: 100%;
    }
  }
`;

export default function ProjectsSection() {
  return (
    <>
      <ProjectSectionStyle>
        <div className="container">
          <SectionTitle heading="Projects" subheading="some of my works" />
          <Slide left>
            <div className="projects_allItems">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >
                {projects.map((projects, index) => {
                  if (index >= 5) {
                    return false;
                  }
                  return (
                    <SwiperSlide key={projects.id}>
                      <ProjectItem
                        title={projects.name}
                        img={projects.img}
                        desc={projects.desc}
                        link={projects.path}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Slide>
        </div>
      </ProjectSectionStyle>
    </>
  );
}
