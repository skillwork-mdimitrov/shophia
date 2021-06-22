import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

import { ReactComponent as Model1Photoshoot } from './img/carousel-models/model-1.svg';
import { ReactComponent as Model2Photoshoot } from './img/carousel-models/model-2.svg';
import { ReactComponent as Model3Photoshoot } from './img/carousel-models/model-3.svg';
import { ReactComponent as MidSeasonSale } from './img/mid-season-sale.svg';
import { StyledAbsCenteredYDiv } from './styles/StyledAbsCenteredDiv';

const StyledAbsTriangleNeck = styled(StyledAbsCenteredYDiv)`
  width: 0;
  height: 0;
  top: 0;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-top: 30px solid white;
`;

const StyledCarouselCaption = styled(Carousel.Caption)`
  top: 15%;
`;

const StyledRelativeDiv = styled.div`
  position: relative;
`

const PhotoshootCarousel = () =>
  <StyledRelativeDiv>
    <Carousel>
      <Carousel.Item>
        <Model3Photoshoot alt="First slide" />
        <StyledCarouselCaption>
          <MidSeasonSale />
        </StyledCarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <Model2Photoshoot alt="Second slide" />
        <StyledCarouselCaption>
          <MidSeasonSale />
        </StyledCarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <Model1Photoshoot alt="Third slide" />
        <StyledCarouselCaption>
          <MidSeasonSale />
        </StyledCarouselCaption>
      </Carousel.Item>
    </Carousel>
    <StyledAbsTriangleNeck />
  </StyledRelativeDiv>

export { PhotoshootCarousel }