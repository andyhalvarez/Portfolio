import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To My Portfolio <br />
      </SectionTitle>
      <SectionText>
        {" "}
        I'm Andy Alvarez, and I am a Full Stack Web Developer
      </SectionText>
      <a href="#projects">
        <Button>Projects</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
