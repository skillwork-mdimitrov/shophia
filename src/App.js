import './styles/App.scss';
import Button from 'react-bootstrap/Button';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './AwesomeIcons';
import { PhotoshootCarousel } from './Carousel';
import { CurrencyDropdownBtn } from './DropdownButton';
import { RibbonArea } from './RibbonArea';
import { StyledBrandName } from './styles/StyledBrandName';
import { StyledDiamond } from './styles/StyledDiamond';
import { StyledLinksContainer } from './styles/StyledLinksContainer';
import { TopNavBar } from './NavBar';
import { QuickLinks } from './Nav';

import { ReactComponent as BlackBoots } from './img/boots-black.svg';

function App() {
  const subPageLinks = ['Home', 'Gallery', 'Categories', 'Pages'];
  const socialMediaLinks = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon]

  return (
    <>
      <TopNavBar />

      <StyledLinksContainer>
        <QuickLinks inlineFlex links={subPageLinks} />
        <StyledBrandName>Shophia</StyledBrandName>
        <QuickLinks inlineFlex links={socialMediaLinks} />
        <CurrencyDropdownBtn inlineFlex />
      </StyledLinksContainer>

      <PhotoshootCarousel />

      <RibbonArea />

      <div className="container-fluid" style={{ margin: "30px 0" }}>
        <div className="row">
          <hr className="col" />
          <div className="col d-flex justify-content-around">
            <StyledDiamond />

            HandPicked

            <StyledDiamond />
          </div>
          <hr className="col" />
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="mb-4" style={{
              backgroundColor: '#E8E8E8',
              position: 'relative'
            }}>
              <div style={{
                backgroundColor: 'black',
                left: '50%',
                height: '80%',
                opacity: '0.2',
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
              }}></div>
              <Button variant="warning" style={{
                left: '50%',
                top: '75w%',
                transform: 'translate(-50%, -50%)',
              }}>SHOP NOW</Button>{' '}
              <BlackBoots />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-4" style={{
              backgroundColor: '#E8E8E8',
            }}>
              <BlackBoots />
            </div>
          </div>
          <div className="col-3">
            <div className="mb-4" style={{
              backgroundColor: '#E8E8E8',
            }}>
              <BlackBoots />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <div style={{
              backgroundColor: '#E8E8E8',
            }}>
              <BlackBoots />
            </div>
          </div>
          <div className="col-6">
            <div style={{
              backgroundColor: '#E8E8E8',
            }}>
              <BlackBoots />
            </div>
          </div>
          <div className="col-3">
            <div style={{
              backgroundColor: '#E8E8E8',
            }}>
              <BlackBoots />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
