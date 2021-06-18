import './App.scss';
import { checkIcon, clockIcon, facebookIcon, instagramIcon, pinterestIcon, twitterIcon, planeIcon } from './AwesomeIcons';
import { PhotoshootCarousel } from './Carousel';
import { CurrencyDropdownBtn } from './DropdownButton';
import { TopNavBar } from './NavBar';
import { QuickLinks } from './Nav';

function App() {
  const subPageLinks = ['Home', 'Gallery', 'Categories', 'Pages'];
  const socialMediaLinks = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon]

  return (
    <>
      <TopNavBar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <QuickLinks inlineFlex links={subPageLinks} />
        <span className="brandFont">Shophia</span>
        <QuickLinks inlineFlex links={socialMediaLinks} />
        <CurrencyDropdownBtn inlineFlex />
      </div>

      <PhotoshootCarousel />

      <div style={
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }>

        <div className="right-arrow">
          {planeIcon} FREE SHIPPING
        </div>

        <a href="#" className="aLink">
          <span className="myButton ribbon">
            {clockIcon}
            30-DAYS RETURNS
          </span>
        </a>

        <div className="left-arrow">
          {checkIcon} 24/7 SUPPORT
        </div>

      </div>


    </>
  );
}

export default App;
