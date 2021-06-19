import './styles/App.scss';
import Button from 'react-bootstrap/Button';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './AwesomeIcons';
import { PhotoshootCarousel } from './Carousel';
import { CurrencyDropdownBtn } from './DropdownButton';
import { RibbonArea } from './RibbonArea';
import { SectionSeparator } from './styles/SectionSeparator';
import { StyledBrandName } from './styles/StyledBrandName';
import { StyledLinksContainer } from './styles/StyledLinksContainer';
import { TopNavBar } from './NavBar';
import { QuickLinks } from './Nav';

import { ReactComponent as BlackBoots } from './img/boots-black.svg';
import { ReactComponent as BlackBracelet } from './img/bracelet-black.svg';

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

      <SectionSeparator text='HandPicked'/>

      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="mb-4 d-flex justify-content-center" style={{
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
                position: 'absolute',
                top: '75%',
                transform: 'translate(-50%, -50%)'
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
            <div className="mb-4 d-flex justify-content-center" style={{
              backgroundColor: '#E8E8E8',
            }}>
              <div style={{
                border: '3px solid white',
                height: '80%',
                left: '50%',
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
              }}></div>
              <em style={{
                left: '50%',
                position: 'absolute',
                top: '45%',
                transform: 'translate(-50%, -50%)',
                fontSize: '3em',
              }}>50 % <br />OFF</em>
              <BlackBracelet />
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
