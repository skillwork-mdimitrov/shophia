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

const StyledAbsButton = styled(Button)`
  left: 50%;
  position: absolute;
  top: 75%;
  transform: translate(-50%, -50%)
`;

const StyledAbsEm = styled.em`
  left: 50%;
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  text-transform: uppercase;
  line-height: 1em;
`;

const HandPicked = () =>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <LightGrayContainer className="mb-4 d-flex justify-content-center rounded">
          <SemiTransparentSquare />
          <StyledAbsButton className="text-uppercase" variant="warning">Shop now</StyledAbsButton>
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
          <StyledAbsEm>50 % <br />off</StyledAbsEm>
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