import { ReactComponent as BakeryLogo } from '../../img/Brands/bakery-logo.svg';
import { ReactComponent as HarvestLogo } from '../../img/Brands/harvest-logo.svg';
import { ReactComponent as HomeEnergyLogo } from '../../img/Brands/home-energy-logo.svg';
import { ReactComponent as LandLockLogo } from '../../img/Brands/landlock-logo.svg';
import { ReactComponent as LavalierLogo } from '../../img/Brands/lavalier-logo.svg';
import { ReactComponent as SpectrumLogo } from '../../img/Brands/spectrum-logo.svg';

const brandFactory = (logo) =>
  <div className={"col-lg-2 col-md-4 mb-4 col-sm-6 d-flex justify-content-center align-items-center"}>
    {logo}
  </div>

const BrandSection = () =>
  <div className="container-fluid">
    <div className="row">

      {brandFactory(<BakeryLogo />)}
      {brandFactory(<LavalierLogo />)}
      {brandFactory(<HarvestLogo />)}
      {brandFactory(<LandLockLogo />)}
      {brandFactory(<SpectrumLogo />)}
      {brandFactory(<HomeEnergyLogo />)}

    </div>
  </div>

export { BrandSection }