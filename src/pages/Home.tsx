import React from 'react'
import PageBackground from '../components/PageBackground'
import {
  HeroContent,
  HomeMainTitle,
  HomeBodyText,
  MethodologySection,
  DiscoverTitle,
  DeepDiveTitle,
  FooterSection,
  TitleCopy,
  WhiteLine,
  FooterContainer
} from '../components/styled/HomeStyles'
import { homeContent, handleMethodologyClick, handleFooterItemClick } from '../data/homeData'

const Home: React.FC = () => {
  return (
    <PageBackground>
      <HeroContent>
        <HomeMainTitle>
          {homeContent.hero.title}
        </HomeMainTitle>
        <HomeBodyText>
          {homeContent.hero.description}
        </HomeBodyText>
      </HeroContent>

      <MethodologySection onClick={handleMethodologyClick}>
        <DiscoverTitle>
          {homeContent.methodology.discoverTitle}
        </DiscoverTitle>
        <DeepDiveTitle>
          {homeContent.methodology.deepDiveTitle}
        </DeepDiveTitle>
      </MethodologySection>

      <WhiteLine />

      <FooterSection>
        <FooterContainer>
          {homeContent.footer.titles.map((title, index) => (
            <TitleCopy 
              key={index}
              onClick={() => handleFooterItemClick(title)}
              style={{ cursor: 'pointer' }}
            >
              {title}
            </TitleCopy>
          ))}
        </FooterContainer>
      </FooterSection>
    </PageBackground>
  )
}

export default Home