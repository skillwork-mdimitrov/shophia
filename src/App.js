import './App.scss';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './AwesomeIcons';
import { PhotoshootCarousel } from './Carousel';
import { CurrencyDropdownBtn } from './DropdownButton';
import { RibbonArea } from './RibbonArea';
import styled from 'styled-components'
import { TopNavBar } from './NavBar';
import { QuickLinks } from './Nav';

function App() {
  const subPageLinks = ['Home', 'Gallery', 'Categories', 'Pages'];
  const socialMediaLinks = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon]

  const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const HandPickedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Diamond = styled.div`
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom-color: red;
    position: relative;
    top: -50px;

    &::after {
      content: '';
      position: absolute;
      left: -50px;
      top: 50px;
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-top-color: red;
    }
  `;

  return (
    <>
      <TopNavBar />
      <LinksContainer>
        <QuickLinks inlineFlex links={subPageLinks} />
        <span className="brandFont">Shophia</span>
        <QuickLinks inlineFlex links={socialMediaLinks} />
        <CurrencyDropdownBtn inlineFlex />
      </LinksContainer>

      <PhotoshootCarousel />

      <RibbonArea />

      <div className="container-fluid">
        <div className="row">
          <hr className="col"/>
          <div className="col">
            <Diamond/>
          </div>
          <hr className="col"/>
        </div>
      </div>

    </>
  );
}

export default App;
