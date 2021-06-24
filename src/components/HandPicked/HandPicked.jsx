import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

import { colours } from '../../styles/commonColours';
import { ReactComponent as BlackBootsImg } from '../../img/boots-black.svg';
import { ReactComponent as BlackBraceletImg } from '../../img/bracelet-black.svg';
import { ReactComponent as BlackPouchImg } from '../../img/black-pouch.svg';
import { ReactComponent as BraceletSilverImg } from '../../img/bracelet-silver.svg';
import { ReactComponent as ParisHiltonCollectionImg } from '../../img/paris-hilton-collection.svg';
import { StyledAbsCenteredXYDiv } from '../../styles/StyledAbsCenteredDiv';

const AbsoluteWhiteFrame = styled(StyledAbsCenteredXYDiv)`
  border: 3px solid white;
  height: 85%;
  width: 85%;
`;

const LightGrayContainer = styled.div`
  background-color: ${colours.lightGray};
  position: relative
`;

const SemiTransparentSquare = styled(StyledAbsCenteredXYDiv)`
  background-color: black;
  height: 80%;
  opacity: 0.2;
  width: 80%;
`;

const HandPicked = () =>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <LightGrayContainer className="mb-4 d-flex justify-content-center rounded">
          <SemiTransparentSquare />
          <Button className="text-uppercase" variant="warning" style={{
            left: '50%',
            position: 'absolute',
            top: '75%',
            transform: 'translate(-50%, -50%)'
          }}>Shop now</Button>{' '}
          <BlackBootsImg />
        </LightGrayContainer>

        <LightGrayContainer className='d-flex justify-content-center rounded'>
          <AbsoluteWhiteFrame />
          <BraceletSilverImg />
        </LightGrayContainer>
      </div>

      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <LightGrayContainer className="d-flex justify-content-end mb-4 rounded">
          <AbsoluteWhiteFrame />
          <ParisHiltonCollectionImg />
        </LightGrayContainer>
      </div>

      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <LightGrayContainer className="mb-4 d-flex justify-content-center rounded">
          <AbsoluteWhiteFrame />
          <em style={{
            left: '50%',
            position: 'absolute',
            top: '45%',
            transform: 'translate(-50%, -50%)',
            fontSize: '3em',
            textTransform: 'uppercase',
            lineHeight: '1em'
          }}>50 % <br />off</em>
          <BlackBraceletImg />
        </LightGrayContainer>

        <LightGrayContainer className='d-flex justify-content-center rounded'>
          <AbsoluteWhiteFrame />
          <BlackPouchImg />
        </LightGrayContainer>
      </div>
    </div>
  </div>

export { HandPicked }