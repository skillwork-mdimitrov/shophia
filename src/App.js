import './App.scss';
import { QuickLinks } from './Nav';
import { TopNavBar } from './NavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  const subPageLinks = ['Home', 'Gallery', 'Categories', 'Pages'];
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
  const pinterestIcon = <FontAwesomeIcon icon={faPinterest} />
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} />

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
