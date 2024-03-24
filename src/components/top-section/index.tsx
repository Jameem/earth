import styled from 'styled-components';
import { Footer } from '../footer';

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 74.7%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;

const Title = styled.h1`
  margin: 0;
  color: #6b13cf;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.div`
  margin: 0;
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  margin-top: 1em;
`;

const Paragraph = styled.p`
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-top: 1em;
  line-height: 1.5;
  max-width: 30%;
  text-align: center;

  @media only screen and (max-width: 1600px) {
    max-width: 50%;
  }

  @media only screen and (max-width: 1100px) {
    max-width: 60%;
  }

  @media only screen and (max-width: 700px) {
    max-width: 70%;
  }
`;

const GreenSpan = styled.span`
  color: #3cdf1c;
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Title>EARTH</Title>
      <Slogan>A Speck in the Vast Cosmos</Slogan>
      <Paragraph>
        Consider the vastness of the universe, where our Earth is but a speck in
        the infinite expanse of space. In this grand cosmic arena, our petty
        conflicts and divisions pale in comparison to the majesty of our shared
        existence. By recognizing the preciousness of{' '}
        <GreenSpan>life</GreenSpan> on this tiny blue dot, we can transcend our
        differences and work together to create a world where{' '}
        <GreenSpan>peace</GreenSpan> and <GreenSpan>harmony</GreenSpan> prevail.
      </Paragraph>
      <Footer />
    </TopSectionContainer>
  );
}
