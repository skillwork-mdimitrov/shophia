import './App.scss';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './AwesomeIcons';
import Carousel from 'react-bootstrap/Carousel';
import { CurrencyDropdownBtn } from './DropdownButton';
import { ReactComponent as BeccaPhotoshoot } from './img/photoShoot-1.svg';
import { TopNavBar } from './NavBar';
import { QuickLinks } from './Nav';

function App() {
  const subPageLinks = ['Home', 'Gallery', 'Categories', 'Pages'];
  const socialMediaLinks = [facebookIcon, instagramIcon, pinterestIcon, twitterIcon]

  return (
    <>
      <TopNavBar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <QuickLinks inlineFlex links={subPageLinks} />
        <span className="brandFont">Shophia</span>
        <QuickLinks inlineFlex links={socialMediaLinks} />
        <CurrencyDropdownBtn inlineFlex />
      </div>

      <Carousel>
        <Carousel.Item>
          <BeccaPhotoshoot alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <BeccaPhotoshoot alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <BeccaPhotoshoot alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default App;
