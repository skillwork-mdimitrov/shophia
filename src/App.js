import './styles/App.scss';
import { BrandSection } from './components/Brand/BrandSection';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './components/Icon/AwesomeIcons';
import { CurrencyDropdownBtn } from './components/DropdownButton/CurrencyDropdownBtn';
import { HandPicked } from './components/HandPicked/HandPicked';
import { Footer } from './components/Footer/Footer';
import { PhotoshootCarousel } from './components/Carousel/PhotoshootCarousel';
import { RibbonArea } from './components/RibbonArea/RibbonArea';
import { SectionSeparator } from './components/SectionSeparator/SectionSeparator';
import { StyledBrandName } from './styles/StyledApp';
import { StyledLinksContainer } from './styles/StyledApp';
import { SummerCollection } from './components/SummerCollection/SummerCollection';
import { Testemonials } from './components/Testemonials/Testemonials';
import { TopNavBar } from './components/NavigationBar/NavBar';
import { QuickLinks } from './components/Navigation/Nav';

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

      <PhotoshootCarousel/>

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
