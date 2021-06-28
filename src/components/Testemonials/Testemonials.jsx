import styled from 'styled-components';

import { colours } from '../../styles/commonColours';
import { ReactComponent as ReviewFemaleImg } from '../../img/sandra-dewi-review.svg';
import { ReactComponent as ReviewMaleImg } from '../../img/shaheer-sheikh-review.svg';
import { StyledVNeckline } from '../../styles/StyledVNeckline';

const StyledColouredDiv = styled.div`
  background-color: ${colours.straw};
  position: relative;
`;

const StyledFlexedDiv = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const StyledSizedText = styled.p`
  width: 50%;
`;

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAlignedSizedText = styled(StyledSizedText)`
  text-align: end;
`;

const StyledReviewerName = styled.em`
  font-family: 'Playfair Display', serif;
  font-size: 2em;
`;


const Testemonials = () =>
  <StyledColouredDiv className="container-fluid">
    <StyledVNeckline />

    <div className="row pt-4 pb-4">
      <div className="col-lg-6 d-flex align-items-center">
        <ReviewFemaleImg />

        <StyledFlexContainer>
          <StyledSizedText className="text-white">
            Sed ut perspiciatis
            unde omnis iste natus error sit
            voluptatem accusantium doloremque
          </StyledSizedText>

          <StyledReviewerName className="mt-4">
            Sandra Dewi
          </StyledReviewerName>
          <p>FASHION STYLISH</p>
        </StyledFlexContainer>

      </div>
      <div className="col-lg-6 d-flex align-items-center">
        <div>

          <StyledFlexedDiv>
            <StyledAlignedSizedText className="text-white">
              Sed ut perspiciatis
              unde omnis iste natus error sit
              voluptatem accusantium doloremque
            </StyledAlignedSizedText>

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