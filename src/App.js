import './styles/App.scss';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './AwesomeIcons';
import { PhotoshootCarousel } from './Carousel';
import { CurrencyDropdownBtn } from './DropdownButton';
import { RibbonArea } from './RibbonArea';
import { StyledBrandName } from './styles/StyledBrandName';
import { StyledDiamond } from './styles/StyledDiamond';
import { StyledLinksContainer } from './styles/StyledLinksContainer';
import { TopNavBar } from './NavBar';
import { QuickLinks } from './Nav';

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

      <div className="container-fluid">
        <div className="row">
          <hr className="col" />
          <div className="col">
            <StyledDiamond />
          </div>
          <hr className="col" />
        </div>
      </div>
    </>
  );
}

export default App;
