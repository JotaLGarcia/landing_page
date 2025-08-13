import React from "react";
import styled from "styled-components";
import { getProjectData } from "../model/projectData";
import "./LandingPage.css";

export default function LandingPage() {
  const { title, slogan, description, image, footer } = getProjectData();

  return (
    <div className="container">
      <header>
        <h1>{title}</h1>
        <p className="slogan">{slogan}</p>
      </header>

      <main>
        <img src={image} alt="Imagem sobre preservação ambiental" className="banner" />
        <p className="description">{description}</p>
        <button className="helpButton">Quero Ajudar</button>
      </main>

      <footer>
        <p><strong>{footer.name}</strong></p>
        <p>{footer.address}</p>
        <p>{footer.email}</p>
      </footer>
    </div>
  );
}
