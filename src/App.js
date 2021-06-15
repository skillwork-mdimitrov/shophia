import './App.scss';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './AwesomeIcons';
import { TopNavBar } from './NavBar';
import { QuickLinks } from './Nav';

function App() {
  const subPageLinks = ['Home', 'Gallery', 'Categories', 'Pages'];
  const socialMediaLinks = [facebookIcon, instagramIcon, pinterestIcon, twitterIcon]

  return (
    <>
      <TopNavBar />
      <div>
        <QuickLinks links={subPageLinks} />
        <h1 className="brandFont">Shophia</h1>
        <QuickLinks links={socialMediaLinks} />
      </div>
    </>
  );
}

export default App;
