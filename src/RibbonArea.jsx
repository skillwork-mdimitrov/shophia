import { checkIcon, clockIcon, planeIcon } from './AwesomeIcons';
import styled from 'styled-components';

const RibbonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RibbonArea = () =>
  <RibbonContainer>
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
  </RibbonContainer>

export { RibbonArea }