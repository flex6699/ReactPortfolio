import React from "react";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/about-page-img.png";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top_section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about_subHeading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
    .right {
      img {
        border: 2px solid var(--gray-1);
      }
    }
  }
  .about_info_items {
    margin-top: 15rem;
  }
  .about_info_item {
    margin-bottom: 10rem;
  }
  .about_info_heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top_section {
      flex-direction: column;
      gap: 5rem;
    }
    .about_heading {
      font-size: 2.8rem;
    }
    .about_subHeading {
      font-size: 1.5rem;
    }
    .about_info_heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top_section">
          <div className="left">
            <p className="about_subHeading">
              Hi, I am <span>Aniruddha Bohra</span>
            </p>
            <h2 className="about_heading">Btech CSE student</h2>
            <div className="about_info">
              <PText>
                I am from lohaghat, Uttarakhand. A small town known as The
                Mystique Valley. Since my childhood , i always try to design
                stuff with my point of view .<br />
                <br />I began coding in my first year of college. I love it . I
                find it really interesting and I enjoyed the proccess a lot.
                <br /> <br />
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="about-img" />
          </div>
        </div>
        <div className="about_info_items">
          <div className="about_info_item">
            <h1 className="about_info_heading">Education</h1>
            <AboutInfoItem title="School" items={["AVBIL, Haldwani"]} />
            <AboutInfoItem
              title="College"
              items={["Bennett University,Noida"]}
            />
          </div>
          <div className="about_info_item">
            <h1 className="about_info_heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={["HTML", "CSS", "React", "JavaScript"]}
            />
            <AboutInfoItem title="DataBase" items={["MySql"]} />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
