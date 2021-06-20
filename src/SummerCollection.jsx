import { colours } from './styles/commonColours';
import { ReactComponent as FemaleModel1 } from './img/SummerCollection/female-1.svg';
import { ReactComponent as FemaleModel2 } from './img/SummerCollection/female-2.svg';
import { ReactComponent as MaleModel1 } from './img/SummerCollection/male-1.svg';
import { ReactComponent as MaleModel2 } from './img/SummerCollection/male-2.svg';
import { ReactComponent as MaleModel3 } from './img/SummerCollection/male-3.svg';
import styled from 'styled-components';

const LightGrayContainer = styled.div`
  background-color: ${colours.lightGray};
  position: relative
`;

const SummerCollection = () =>
  <>
    <div className="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <LightGrayContainer className="d-flex justify-content-center rounded">
            <MaleModel1 />
          </LightGrayContainer>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <LightGrayContainer className="d-flex justify-content-center rounded">
            <FemaleModel1 />
          </LightGrayContainer>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <LightGrayContainer className="d-flex justify-content-center rounded">
            <FemaleModel2 />
          </LightGrayContainer>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <LightGrayContainer className="d-flex justify-content-center rounded">
            <MaleModel2 />
          </LightGrayContainer>
        </div>
      </div>
    </div>
  </>

export { SummerCollection }