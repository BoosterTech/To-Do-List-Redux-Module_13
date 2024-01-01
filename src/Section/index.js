import React from "react";
import { Header, SectionContainer, Wrapper } from "./styled";

const Section = ({
  title,
  extraHeaderContent,
  bodyContent,
  id,
  headerType,
}) => (
  <Wrapper>
    <SectionContainer id={id}>
      <Header headerType={headerType}>{title}</Header>
      {extraHeaderContent}
    </SectionContainer>
    {bodyContent}
  </Wrapper>
);

export default Section;
