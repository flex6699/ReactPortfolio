import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import Jump from "react-reveal/Jump";
const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner_wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner_heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 768px) {
    .contactBanner_heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <>
      <ContactBannerStyles>
        <Jump>
          <div className="container">
            <div className="contactBanner_wrapper">
              <PText>Have a project in mind</PText>
              <h3 className="contactBanner_heading">Let me help you</h3>
              <Button btnTxt="Contact Now" btnLink="/contact" />
            </div>
          </div>
        </Jump>
      </ContactBannerStyles>
    </>
  );
}
