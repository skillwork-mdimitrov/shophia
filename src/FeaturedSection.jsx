import Button from 'react-bootstrap/Button';
import { colours } from './styles/commonColours';
import { ReactComponent as BlackBootsImg } from './img/boots-black.svg';
import { ReactComponent as BlackBraceletImg } from './img/bracelet-black.svg';
import { ReactComponent as BlackPouchImg } from './img/black-pouch.svg';
import { ReactComponent as BraceletSilverImg } from './img/bracelet-silver.svg';
import styled from 'styled-components';

const AbsoluteCenteredDiv = styled.div`
  left: ${({ leftValue = 50 }) => leftValue}%;
  position: absolute;
  top: ${({ topValue = 50 }) => topValue}%;
  transform: translate(-50%, -50%);
`;

const AbsoluteWhiteFrame = styled(AbsoluteCenteredDiv)`
  border: 3px solid white;
  height: 80%;
  width: 80%;
`;

const LightGrayContainer = styled.div`
  background-color: ${colours.lightGray};
  position: ${props => props.relative ? 'relative' : 'static'};
`;

const SemiTransparentSquare = styled(AbsoluteCenteredDiv)`
  background-color: black;
  height: 80%;
  opacity: 0.2;
  width: 80%;
`;

const FeaturedSection = () =>
  <div className="container-fluid">
    <div className="row">
      <div className="col-3">
        <LightGrayContainer relative className="mb-4 d-flex justify-content-center">
          <SemiTransparentSquare/>
          <Button variant="warning" style={{
            left: '50%',
            position: 'absolute',
            top: '75%',
            transform: 'translate(-50%, -50%)'
          }}>SHOP NOW</Button>{' '}
          <BlackBootsImg />
        </LightGrayContainer>
      </div>
      <div className="col-6">
        <LightGrayContainer className="mb-4">
          <BlackBootsImg />
        </LightGrayContainer>
      </div>
      <div className="col-3">
        <LightGrayContainer className="mb-4 d-flex justify-content-center">
          <AbsoluteWhiteFrame />
          <em style={{
            left: '50%',
            position: 'absolute',
            top: '45%',
            transform: 'translate(-50%, -50%)',
            fontSize: '3em',
          }}>50 % <br />OFF</em>
          <BlackBraceletImg />
        </LightGrayContainer>
      </div>
    </div>

    <div className="row">
      <div className="col-3">
        <LightGrayContainer className='d-flex justify-content-center'>
          <AbsoluteWhiteFrame />
          <BraceletSilverImg />
        </LightGrayContainer>
      </div>
      <div className="col-6">
        <LightGrayContainer>
          <BlackBootsImg />
        </LightGrayContainer>
      </div>
      <div className="col-3">
        <LightGrayContainer className='d-flex justify-content-center'>
          <AbsoluteWhiteFrame />
          <BlackPouchImg />
        </LightGrayContainer>
      </div>
    </div>
  </div>

export { FeaturedSection }