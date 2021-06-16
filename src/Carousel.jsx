import Carousel from 'react-bootstrap/Carousel';
import { ReactComponent as BeccaPhotoshoot } from './img/photoShoot-1.svg';
import { ReactComponent as MidSeasonSale } from './img/mid-season-sale.svg';

const PhotoshootCarousel = () =>
  <Carousel>
    <Carousel.Item>
      <BeccaPhotoshoot alt="First slide" />
      <Carousel.Caption style={{ top: "15%" }}>
        <MidSeasonSale />
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <BeccaPhotoshoot alt="Second slide" />
      <Carousel.Caption style={{ top: "15%" }}>
        <MidSeasonSale />
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <BeccaPhotoshoot alt="Third slide" />
      <Carousel.Caption style={{ top: "15%" }}>
        <MidSeasonSale />
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

export { PhotoshootCarousel }