import React from "react";
import "./Contact.scss";

export const Contact = mail => (
  <a href={"mailto:" + mail} target="_blank" rel="noopener noreferrer">
    <div className="contact">
      <div className="contact__text">
        <span>Contatta gli organizzatori</span>
      </div>
    </div>
  </a>
);
