import React, { useState, useRef, useEffect } from "react";
import getAge from "../getAge";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

export default function AboutMe() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I graduated from Califronia State Dominguez Hills in 2021 with a
        Bachelors degree in Business Administration. I became an Accounts
        Resource but shortly after I decided to pursue a career in Software
        Engineering. I enrolled in Thinkful's Engineering Immersion Program and
        graduted in January 2023. As a {getAge(new Date("April 19, 1999"))} year
        old developer, I am excited to learn and add more to my skill set every
        single day to become the best developer I can be.{" "}
      </SectionText>
    </Section>
  );
}
