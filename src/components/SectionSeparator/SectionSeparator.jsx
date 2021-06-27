import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledDiamond } from '../../styles/StyledDiamond';

const StyledSeparatorText = styled.p`
  font-family: Playfair Display, serif;
  font-size: 1.5em;
`;

const StyledMarginedDiv = styled.div`
  margin: 30px 0;
`;

const SectionSeparator = ({ text }) =>
  <StyledMarginedDiv className="container-fluid">
    <div className="row">
      <hr className="col" />
      <div className="col d-flex justify-content-around">
        <StyledDiamond />
        <StyledSeparatorText>{text}</StyledSeparatorText>
        <StyledDiamond />
      </div>
      <hr className="col" />
    </div>
  </StyledMarginedDiv>

SectionSeparator.propTypes = {
  text: PropTypes.string
}

export { SectionSeparator }