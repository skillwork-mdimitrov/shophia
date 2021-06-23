import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

import { ReactComponent as Model1Photoshoot } from './img/CarouselModels/model-1.svg';
import { ReactComponent as Model2Photoshoot } from './img/CarouselModels/model-2.svg';
import { ReactComponent as Model3Photoshoot } from './img/CarouselModels/model-3.svg';
import { ReactComponent as MidSeasonSale } from './img/mid-season-sale.svg';
import { StyledAbsTriangleNeck } from './styles/StyledAbsTriangleNeck';

const StyledCarouselCaption = styled(Carousel.Caption)`
  top: 15%;
`;

const StyledRelativeDiv = styled.div`
  position: relative;
`

const PhotoshootCarousel = () =>
  <StyledRelativeDiv>
    <StyledAbsTriangleNeck borderTop={60}/>
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
  </StyledRelativeDiv>

export { PhotoshootCarousel }