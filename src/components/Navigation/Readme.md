A React Bootstrap Nav component that generates a row of clickable navigation links.<br>

#### Technical details
More on the underlying Nav component - https://react-bootstrap.github.io/components/navs/

```js
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from '../Icon/AwesomeIcons';

const subPageLinks = ['Home', 'Gallery', 'Categories', 'Pages'];
const numberLinks = [1,2,3,4]
const socialMediaLinks = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon];

<>
  <QuickLinks links={subPageLinks} />
  <QuickLinks links={numberLinks} />
  <QuickLinks links={socialMediaLinks} />
</>
```