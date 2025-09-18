import React from 'react'
import PageBackground from '../components/PageBackground'
import {
  StyledContainer,
  MainTitle,
  SectionTitle,
  BodyText,
  ContentSection,
  CardBox,
  GridContainer,
  SubTitle
} from '../components/styled/CommonStyles'
import { aboutUsContent, handleSectionClick } from '../data/aboutUsData'

const AboutUs: React.FC = () => {
  return (
    <PageBackground>
      <StyledContainer maxWidth="lg">
        {/* Main Title */}
        <MainTitle variant="h1">
          {aboutUsContent.title}
        </MainTitle>

        {/* Introduction Section */}
        <ContentSection>
          <SectionTitle 
            variant="h2"
            onClick={() => handleSectionClick('whoWeAre')}
          >
            {aboutUsContent.sections.whoWeAre.title}
          </SectionTitle>
          <CardBox>
            <BodyText>
              {aboutUsContent.sections.whoWeAre.content}
            </BodyText>
          </CardBox>
        </ContentSection>

        {/* Mission Section */}
        <ContentSection>
          <SectionTitle 
            variant="h2"
            onClick={() => handleSectionClick('mission')}
          >
            {aboutUsContent.sections.mission.title}
          </SectionTitle>
          <CardBox>
            <BodyText>
              {aboutUsContent.sections.mission.content}
            </BodyText>
          </CardBox>
        </ContentSection>

        {/* Values Section */}
        <ContentSection>
          <SectionTitle 
            variant="h2"
            onClick={() => handleSectionClick('values')}
          >
            {aboutUsContent.sections.values.title}
          </SectionTitle>
          <GridContainer>
            {aboutUsContent.sections.values.items.map((value) => (
              <CardBox key={value.id}>
                <SubTitle variant="h3">
                  {value.title}
                </SubTitle>
                <BodyText>
                  {value.description}
                </BodyText>
              </CardBox>
            ))}
          </GridContainer>
        </ContentSection>

        {/* Team Section */}
        <ContentSection>
          <SectionTitle 
            variant="h2"
            onClick={() => handleSectionClick('team')}
          >
            {aboutUsContent.sections.team.title}
          </SectionTitle>
          <CardBox>
            <BodyText>
              {aboutUsContent.sections.team.content}
            </BodyText>
          </CardBox>
        </ContentSection>

        {/* Approach Section */}
        <ContentSection>
          <SectionTitle 
            variant="h2"
            onClick={() => handleSectionClick('approach')}
          >
            {aboutUsContent.sections.approach.title}
          </SectionTitle>
          <CardBox>
            <BodyText>
              {aboutUsContent.sections.approach.content}
            </BodyText>
          </CardBox>
        </ContentSection>
      </StyledContainer>
    </PageBackground>
  )
}

export default AboutUs
