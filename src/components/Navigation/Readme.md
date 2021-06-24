```js
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from '../Icon/AwesomeIcons';

const numberLinks = [1,2,3,4]
const subPageLinks = ['Home', 'Gallery', 'Categories', 'Pages'];
const socialMediaLinks = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon];

<>
  <QuickLinks links={subPageLinks} />
  <QuickLinks links={numberLinks} />
  <QuickLinks links={socialMediaLinks} />
</>
```