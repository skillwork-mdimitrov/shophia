import styled from 'styled-components';

import { colours } from '../../styles/commonColours';
import { ReactComponent as ReviewFemaleImg } from '../../img/sandra-dewi-review.svg';
import { ReactComponent as ReviewMaleImg } from '../../img/shaheer-sheikh-review.svg';
import { StyledAbsTriangleNeck } from '../../styles/StyledAbsTriangleNeck';

const StyledColouredDiv = styled.div`
  background-color: ${colours.straw};
  position: relative;
`;

const StyledSizedText = styled.p`
  width: 50%;
`;

const StyledFontText = styled.em`
  font-family: Playfair Display, serif;
  font-size: 2em;
`;

const StyledFlexedDiv = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const StyledFlexedText = styled.p`
  display: inline-flex;  
  text-align: end;
  width: 50%;
`;

const StyledReviewerName = styled.em`
  display: inline-flex;
  font-family: Playfair Display, serif;
  font-size: 2em;
`;


const Testemonials = () =>
  <StyledColouredDiv className="container-fluid">
    <StyledAbsTriangleNeck />

    <div className="row pt-4 pb-4">
      <div className="col-lg-6 d-flex align-items-center">
        <ReviewFemaleImg />

        <div>
          <StyledSizedText className="text-white">
            Sed ut perspiciatis
            unde omnis iste natus error sit
            voluptatem accusantium doloremque
          </StyledSizedText>

          <StyledFontText className="mt-4">
            Sandra Dewi
          </StyledFontText>
          <p>FASHION STYLISH</p>
        </div>

      </div>
      <div className="col-lg-6 d-flex align-items-center">
        <div>

          <StyledFlexedDiv>
            <StyledFlexedText className="text-white">
              Sed ut perspiciatis
              unde omnis iste natus error sit
              voluptatem accusantium doloremque
            </StyledFlexedText>

            <StyledReviewerName className="mt-4">
              Shaheer Sheikh
            </StyledReviewerName>
            <p>DESIGNER</p>
          </StyledFlexedDiv>
        </div>

        <ReviewMaleImg />

      </div>
    </div>
  </StyledColouredDiv>

export { Testemonials }