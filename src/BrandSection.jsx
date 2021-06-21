import { ReactComponent as BakeryLogo } from './img/brands/bakery-logo.svg';
import { ReactComponent as HarvestLogo } from './img/brands/harvest-logo.svg';
import { ReactComponent as HomeEnergyLogo } from './img/brands/home-energy-logo.svg';
import { ReactComponent as LandLockLogo } from './img/brands/landlock-logo.svg';
import { ReactComponent as LavalierLogo } from './img/brands/lavalier-logo.svg';
import { ReactComponent as SpectrumLogo } from './img/brands/spectrum-logo.svg';

const classNames = 'col-lg-2 col-md-4 mb-4 col-sm-6 d-flex justify-content-center align-items-center';

const BrandSection = () =>
  <div className="container-fluid">
    <div className="row">

      <div className={classNames}>
        <BakeryLogo />
      </div>

      <div className={classNames}>
        <LavalierLogo />
      </div>

      <div className={classNames}>
        <HarvestLogo />
      </div>

      <div className={classNames}>
        <LandLockLogo />
      </div>

      <div className={classNames}>
        <SpectrumLogo />
      </div>

      <div className={classNames}>
        <HomeEnergyLogo />
      </div>

    </div>
  </div>

export { BrandSection }