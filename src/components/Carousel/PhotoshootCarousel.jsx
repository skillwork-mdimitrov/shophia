import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

import { ReactComponent as Model1Photoshoot } from '../../img/CarouselModels/model-1.svg';
import { ReactComponent as Model2Photoshoot } from '../../img/CarouselModels/model-2.svg';
import { ReactComponent as Model3Photoshoot } from '../../img/CarouselModels/model-3.svg';
import { ReactComponent as MidSeasonSale } from '../../img/mid-season-sale.svg';
import { StyledVNeckline } from '../../styles/StyledVNeckline';

const StyledCarouselCaption = styled(Carousel.Caption)`
  top: 15%;
`;

const StyledRelativeDiv = styled.div`
  position: relative;
`

const carouselItemFactory = (modelPic) =>
  <Carousel.Item>
    {modelPic}
    <StyledCarouselCaption>
      <MidSeasonSale />
    </StyledCarouselCaption>
  </Carousel.Item>

const PhotoshootCarousel = () =>
  <StyledRelativeDiv>
    <StyledVNeckline borderTop={60} />
    <Carousel>
      {carouselItemFactory(<Model3Photoshoot/>)}
      {carouselItemFactory(<Model2Photoshoot/>)}
      {carouselItemFactory(<Model1Photoshoot/>)}
    </Carousel>
  </StyledRelativeDiv>

export { PhotoshootCarousel }