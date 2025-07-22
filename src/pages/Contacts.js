import React from "react";

import {
  ContactWrapper,
  ContactTitle,
  ContactInfo,
} from "../styles/contact.styles";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactTitle> Contact Me</ContactTitle>
      <ContactInfo>
        <p>
          Email:
          <a href="mailto:shemavalentin@gmail.com">shemavalentin@gmail.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/shemavalentin"
            target="_blank"
            rel="noreferrer"
          >
            github.com/shemavalentin
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/n-shema-valentin-678a3013a/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/shemavalentin
          </a>
        </p>
      </ContactInfo>
    </ContactWrapper>
  );
};

export default Contact;
