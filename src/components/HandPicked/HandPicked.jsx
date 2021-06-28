import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

import { colours } from '../../styles/commonColours';
import { ReactComponent as BlackBootsImg } from '../../img/boots-black.svg';
import { ReactComponent as BlackBraceletImg } from '../../img/bracelet-black.svg';
import { ReactComponent as BlackPouchImg } from '../../img/black-pouch.svg';
import { ReactComponent as BraceletSilverImg } from '../../img/bracelet-silver.svg';
import { ReactComponent as ParisHiltonCollectionImg } from '../../img/paris-hilton-collection.svg';
import { StyledAbsCenteredXYDiv } from '../../styles/StyledAbsCenteredDiv';

const StyledAbsWhiteFrame = styled(StyledAbsCenteredXYDiv)`
  border: 3px solid white;
  height: 85%;
  width: 85%;
`;

const StyledGrayContainer = styled.div`
  background-color: ${colours.lightGray};
  position: relative
`;

const StyledOpaqueSquare = styled(StyledAbsCenteredXYDiv)`
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
        <StyledGrayContainer className="mb-4 d-flex justify-content-center rounded">
          <StyledOpaqueSquare />
          <StyledAbsButton className="text-uppercase" variant="warning">Shop now</StyledAbsButton>
          <BlackBootsImg />
        </StyledGrayContainer>

        <StyledGrayContainer className='d-flex justify-content-center rounded'>
          <StyledAbsWhiteFrame />
          <BraceletSilverImg />
        </StyledGrayContainer>
      </div>

      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <StyledGrayContainer className="d-flex justify-content-end mb-4 rounded">
          <StyledAbsWhiteFrame />
          <ParisHiltonCollectionImg />
        </StyledGrayContainer>
      </div>

      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <StyledGrayContainer className="mb-4 d-flex justify-content-center rounded">
          <StyledAbsWhiteFrame />
          <StyledAbsEm>50 % <br />off</StyledAbsEm>
          <BlackBraceletImg />
        </StyledGrayContainer>

        <StyledGrayContainer className='d-flex justify-content-center rounded'>
          <StyledAbsWhiteFrame />
          <BlackPouchImg />
        </StyledGrayContainer>
      </div>
    </div>
  </div>

export { HandPicked }