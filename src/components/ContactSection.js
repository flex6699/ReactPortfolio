import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

const ContactSectionStyle = styled.div`
  padding-top: 10rem;
  .contactSection_wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection_wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 983px) {
    .contactSection_wrapper {
      flex-direction: column;
      word-break: break-all;
    }
    .contactSection_wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in touch" />
        <div className="contactSection_wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+919149382882" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="aniruddhabohraabc@gmail.com"
            />
            <ContactInfoItem text="Lohaghat , Uttarakhand" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
