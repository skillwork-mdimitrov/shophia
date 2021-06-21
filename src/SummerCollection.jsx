import { colours } from './styles/commonColours';
import { ReactComponent as FemaleModel1 } from './img/SummerCollection/female-1.svg';
import { ReactComponent as FemaleModel2 } from './img/SummerCollection/female-2.svg';
import { ReactComponent as MaleModel1 } from './img/SummerCollection/male-1.svg';
import { ReactComponent as MaleModel2 } from './img/SummerCollection/male-2.svg';
import { ReactComponent as MaleModel3 } from './img/SummerCollection/male-3.svg';
import styled from 'styled-components';

const StyledGrayContainer = styled.div`
  background-color: ${colours.lightGray};
  position: relative
`;

const StyledTrapezoidShape = styled.div`
  border-bottom: 40px solid black;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  height: 0;
  width: 170px;
  display: flex;

  &::after {
    content: '+ADD TO CART';
    font-size: 0.8em;
    margin-top: 15px;
    color: white;
  }

  &:hover {
    cursor: pointer
  }
`;

const StyledAbsTrapezoid = styled(StyledTrapezoidShape)`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
`;

const StyledResCircle = styled.div`
  width: 15%;
  border-radius: 50%;

  background: #F0975D;

  position: absolute;

  left: 5%;
  top: 5%;

  line-height: 0;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const StyledCircleText = styled.div`
  position: absolute;
  bottom: 50%;
  width: 100%;
  text-align: center;

  font-family: arial, sans-serif;
  font-weight: bold;
  color: white;
`;

const SummerCollection = () =>
  <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <StyledGrayContainer className="d-flex justify-content-center rounded">
            <MaleModel1 />
            <StyledAbsTrapezoid />
            <StyledResCircle>
              <StyledCircleText>20%</StyledCircleText>
            </StyledResCircle>
          </StyledGrayContainer>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <StyledGrayContainer className="d-flex justify-content-center rounded">
            <FemaleModel1 />
            <StyledAbsTrapezoid />
          </StyledGrayContainer>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <StyledGrayContainer className="d-flex justify-content-center rounded">
            <FemaleModel2 />
            <StyledAbsTrapezoid />
          </StyledGrayContainer>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <StyledGrayContainer className="d-flex justify-content-center rounded">
            <MaleModel2 />
            <StyledAbsTrapezoid />
            <StyledResCircle>
              <StyledCircleText>40%</StyledCircleText>
            </StyledResCircle>
          </StyledGrayContainer>
        </div>
      </div>
    </div>
  </>

export { SummerCollection }