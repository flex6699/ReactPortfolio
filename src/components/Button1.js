import React from "react";
import styled from "styled-components";
import Pdf from "../assets/cv.pdf";
const ButtonStyle = styled.div`
  margin-top: 2rem;
  .a{
    font-size: 2.2rem;
    background-color:  "var(--gray-1)"};
    padding: 0.6em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color:  "black";
  }
  
  @media only screen and (max-width: 768px) {
    .button-wrapper {
      font-size: 1.8rem;
    }
  }
`;
export default function Button1() {
  return (
    <div>
      <ButtonStyle>
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </ButtonStyle>
    </div>
  );
}
