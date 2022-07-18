import React from "react";
import styled from "styled-components";
import FooterContent from "./FooterContent";
import PText from "./PText";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer_col1 {
    flex: 2;
  }
  .footer_col2,
  .footer_col3,
  .footer_col4 {
    flex: 1;
  }
  .footer_col1_title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer_col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer_col1">
          <h1 className="footer_col1_title">Aniruddha Bohra</h1>
          <PText>
            Welcome to my website. Please feel free to read more about me, or
            you can check out my resume, projects, view site statistics, or
            contact me.
          </PText>
        </div>
        <div className="footer_col2">
          <FooterContent
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "link",
              },
              {
                title: "About",
                path: "/about",
                type: "link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "link",
              },
            ]}
          />
        </div>
        <div className="footer_col3">
          <FooterContent
            heading="Contact Info"
            links={[
              {
                title: "9149382882",
                path: "tel:+919149382882",
              },
              {
                title: "aniruddhabohraabc@gmail.com",
                path: "mailto:aniruddhabohraabc@gmail.com",
              },
              {
                title: "Lohaghat Uttarakhand",
                path:
                  "https://www.google.com/maps/search/?api=1&query=Lohaghat+Uttarakhand",
              },
            ]}
          />
        </div>
        <div className="footer_col4">
          <FooterContent
            heading="Social Links"
            links={[
              {
                title: "Facebook",
                path: "https://facebook.com",
              },
              {
                title: "Instagram",
                path: "https://instagram.com",
              },
            ]}
          />
        </div>
      </div>
    </FooterStyles>
  );
}
