import React from 'react'
import PageBackground from '../components/PageBackground'
import { 
  MainTitle, 
  Subtitle,
  CTATitle
} from '../components/styled/CommonStyles'
import {
  TapContainer,
  HeroSection,
  HeroDescription,
  VideoSection,
  VideoPlayer,
  VideoPlaceholder,
  MethodologySection,
  PillarsContainer,
  DetailedPillarCard,
  PillarTopTitle,
  PillarDescription,
  DetailedDescription,
  CallToActionSection,
  CTADescription,
  CTAButtonsContainer,
  CTAButton
} from '../components/styled/TapStyles'
import { tapContent, handleButtonClick } from '../data/tapData'

const Tap: React.FC = () => {
  return (
    <PageBackground>
      <TapContainer>
        {/* Hero Section */}
        <HeroSection>
          <MainTitle>
            {tapContent.hero.title}
          </MainTitle>
          <Subtitle>
            {tapContent.hero.subtitle}
          </Subtitle>
          <HeroDescription>
            {tapContent.hero.description}
          </HeroDescription>
        </HeroSection>

        {/* Video Section - Full Width */}
        <VideoSection>
          {tapContent.video.src ? (
            <VideoPlayer
              src={tapContent.video.src}
              controls
              autoPlay
              muted
              loop
              aria-label={tapContent.video.alt}
            />
          ) : (
            <VideoPlaceholder>
              <div>{tapContent.video.placeholder}</div>
              <div style={{ fontSize: '16px', marginTop: '10px', opacity: 0.7 }}>
                Coming Soon
              </div>
            </VideoPlaceholder>
          )}
        </VideoSection>

        {/* Text below video */}
        <HeroDescription style={{ marginTop: '40px', fontSize: '14px' }}>
          Experience the power of transformation through our comprehensive methodology designed to unlock your potential and drive meaningful change.
        </HeroDescription>

        {/* Enhanced Methodology Section with Detailed Cards */}
        <MethodologySection>
          <PillarsContainer>
            {tapContent.pillars.map((pillar) => (
              <div key={pillar.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <PillarTopTitle>{pillar.topTitle}</PillarTopTitle>
                <DetailedPillarCard>
                  <PillarDescription>
                    {pillar.description}
                  </PillarDescription>
                  <DetailedDescription>
                    {pillar.detailedContent}
                  </DetailedDescription>
                </DetailedPillarCard>
              </div>
            ))}
          </PillarsContainer>
        </MethodologySection>

        {/* Call to Action Section */}
        <CallToActionSection>
          <CTATitle>
            {tapContent.callToAction.title}
          </CTATitle>
          <CTADescription>
            {tapContent.callToAction.description}
          </CTADescription>
          <CTAButtonsContainer>
            {tapContent.callToAction.buttons.map((button) => (
              <CTAButton 
                key={button.id}
                onClick={() => handleButtonClick(button.action)}
              >
                {button.text}
              </CTAButton>
            ))}
          </CTAButtonsContainer>
        </CallToActionSection>
      </TapContainer>
    </PageBackground>
  )
}

export default Tap