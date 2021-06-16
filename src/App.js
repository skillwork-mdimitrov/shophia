import './App.scss';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './AwesomeIcons';
import { PhotoshootCarousel } from './Carousel';
import { CurrencyDropdownBtn } from './DropdownButton';
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

      <PhotoshootCarousel/>
    </>
  );
}

export default App;
