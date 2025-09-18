import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

// Use the same background as the landing page for consistency
const AboutUsScreen = styled(Box)(() => ({
  position: 'relative',
  width: '100vw',
  minHeight: '100vh',
  overflow: 'hidden',
  background: `
    radial-gradient(ellipse 50% 50% at 20% 30%, rgba(138, 43, 226, 0.8) 0%, transparent 50%),
    radial-gradient(ellipse 40% 40% at 80% 70%, rgba(30, 144, 255, 0.6) 0%, transparent 50%),
    linear-gradient(135deg, rgba(7, 7, 7, 0.9) 0%, rgba(20, 20, 50, 0.95) 50%, rgba(7, 7, 7, 1) 100%)
  `,
  backgroundColor: '#070707',
}))

const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  paddingTop: '120px',
  paddingBottom: '60px',
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    paddingTop: '100px',
    paddingBottom: '40px',
  },
}))

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.133,
  textAlign: 'center',
  marginBottom: '4rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
    marginBottom: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    marginBottom: '2rem',
  },
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: '2rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    marginBottom: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    marginBottom: '1rem',
  },
}))

const BodyText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 400,
  lineHeight: 1.455,
  textAlign: 'left',
  marginBottom: '2rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}))

const ContentSection = styled(Box)(({ theme }) => ({
  marginBottom: '4rem',
  [theme.breakpoints.down('md')]: {
    marginBottom: '3rem',
  },
}))

const CardBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '15px',
  padding: '2rem',
  margin: '2rem 0',
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem',
    margin: '1.5rem 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
    margin: '1rem 0',
  },
}))

const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
}))

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontFamily: 'Montserrat',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: 1.2,
  textAlign: 'center',
  marginBottom: '1rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}))

const AboutUs: React.FC = () => {
  return (
    <AboutUsScreen>
      <StyledContainer maxWidth="lg">
        {/* Main Title */}
        <MainTitle variant="h1">
          About Us
        </MainTitle>

        {/* Introduction Section */}
        <ContentSection>
          <SectionTitle variant="h2">
            Who We Are
          </SectionTitle>
          <CardBox>
            <BodyText>
              We are passionate professionals dedicated to transforming businesses through 
              innovative strategies and personalized solutions. Our team combines deep industry 
              expertise with cutting-edge methodologies to deliver exceptional results for our clients.
            </BodyText>
          </CardBox>
        </ContentSection>

        {/* Mission Section */}
        <ContentSection>
          <SectionTitle variant="h2">
            Our Mission
          </SectionTitle>
          <CardBox>
            <BodyText>
              To empower organizations and individuals to reach their full potential through 
              strategic guidance, innovative thinking, and actionable insights that drive 
              sustainable growth and success.
            </BodyText>
          </CardBox>
        </ContentSection>

        {/* Values Section */}
        <ContentSection>
          <SectionTitle variant="h2">
            Our Values
          </SectionTitle>
          <GridContainer>
            <CardBox>
              <SubTitle variant="h3">
                Excellence
              </SubTitle>
              <BodyText>
                We strive for excellence in everything we do, delivering high-quality 
                solutions that exceed expectations and create lasting impact.
              </BodyText>
            </CardBox>
            <CardBox>
              <SubTitle variant="h3">
                Innovation
              </SubTitle>
              <BodyText>
                We embrace innovative thinking and cutting-edge approaches to solve 
                complex challenges and create breakthrough opportunities.
              </BodyText>
            </CardBox>
            <CardBox>
              <SubTitle variant="h3">
                Integrity
              </SubTitle>
              <BodyText>
                We operate with the highest level of integrity, building trust through 
                transparency, honesty, and ethical business practices.
              </BodyText>
            </CardBox>
          </GridContainer>
        </ContentSection>

        {/* Team Section */}
        <ContentSection>
          <SectionTitle variant="h2">
            Our Team
          </SectionTitle>
          <CardBox>
            <BodyText>
              Our diverse team of experts brings together decades of combined experience 
              across various industries and disciplines. We collaborate closely to ensure 
              every client receives personalized attention and tailored solutions that 
              address their unique challenges and opportunities.
            </BodyText>
          </CardBox>
        </ContentSection>

        {/* Approach Section */}
        <ContentSection>
          <SectionTitle variant="h2">
            Our Approach
          </SectionTitle>
          <CardBox>
            <BodyText>
              We believe in a collaborative, data-driven approach that combines strategic 
              thinking with practical implementation. Our methodology ensures sustainable 
              results by focusing on both immediate wins and long-term transformation.
            </BodyText>
          </CardBox>
        </ContentSection>
      </StyledContainer>
    </AboutUsScreen>
  )
}

export default AboutUs
