import './App.scss';
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from './AwesomeIcons';
import { TopNavBar } from './NavBar';
import { QuickLinks } from './Nav';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
        
        <DropdownButton id="dropdown-basic-button" title="RUPIAH" variant="secondary">
          <Dropdown.Item href="#/action-1">BGN</Dropdown.Item>
          <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>
          <Dropdown.Item href="#/action-3">USD</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}

export default App;
