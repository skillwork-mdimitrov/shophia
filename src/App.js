import './styles/App.scss';

import { BrandSection } from './BrandSection';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './AwesomeIcons';
import { CurrencyDropdownBtn } from './DropdownButton';
import { FeaturedSection } from './FeaturedSection';
import { PhotoshootCarousel } from './Carousel';
import { RibbonArea } from './RibbonArea';
import { SectionSeparator } from './SectionSeparator';
import { StyledBrandName } from './styles/StyledBrandName';
import { StyledLinksContainer } from './styles/StyledLinksContainer';
import { SummerCollection } from './SummerCollection';
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

      <SectionSeparator text='HandPicked' />

      <FeaturedSection />

      <SectionSeparator text='Summer Collection' />

      <SummerCollection />

      <SectionSeparator text='Our Brand' />

      <BrandSection />

    </>
  );
}

export default App;
