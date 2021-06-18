import { checkIcon, clockIcon, planeIcon } from './AwesomeIcons';

const RibbonArea = () =>
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

export { RibbonArea }