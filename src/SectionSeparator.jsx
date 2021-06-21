import { StyledDiamond } from './styles/StyledDiamond';

const SectionSeparator = ({ text }) =>
  <div className="container-fluid" style={{ margin: "30px 0" }}>
    <div className="row">
      <hr className="col" />
      <div className="col d-flex justify-content-around">
        <StyledDiamond />
        <p style={{
          fontFamily: 'Playfair Display',
        }}>{text}</p>
        <StyledDiamond />
      </div>
      <hr className="col" />
    </div>
  </div>

export { SectionSeparator }