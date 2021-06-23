import './styles/App.scss';

import { BrandSection } from './BrandSection';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './AwesomeIcons';
import { CurrencyDropdownBtn } from './DropdownButton';
import { HandPicked } from './HandPicked';
import { Footer } from './Footer';
import { PhotoshootCarousel } from './Carousel';
import { RibbonArea } from './RibbonArea';
import { SectionSeparator } from './SectionSeparator';
import { StyledBrandName } from './styles/StyledApp';
import { StyledLinksContainer } from './styles/StyledApp';
import { SummerCollection } from './SummerCollection';
import { Testemonials } from './Testemonials';
import { TopNavBar } from './NavBar';
import { QuickLinks } from './Nav';

function App() {
  const subPageLinks = ['Home', 'Gallery', 'Categories', 'Pages'];
  const socialMediaLinks = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon]

  return (
    <>
      <TopNavBar />

      <StyledLinksContainer className="ml-4 mr-4">
        <QuickLinks links={subPageLinks} />
        <StyledBrandName className="pr-5">Shophia</StyledBrandName>
        <div className="d-flex">
          <QuickLinks links={socialMediaLinks} />
          <CurrencyDropdownBtn />
        </div>
      </StyledLinksContainer>

      <PhotoshootCarousel />

      <RibbonArea />

      <SectionSeparator text='HandPicked' />

      <HandPicked />

      <SectionSeparator text='Summer Collection' />

      <SummerCollection />

      <SectionSeparator text='Our Brand' />

      <BrandSection />

      <SectionSeparator text='Customers Says' />

      <Testemonials />

      <Footer />
    </>
  );
}

export default App;
