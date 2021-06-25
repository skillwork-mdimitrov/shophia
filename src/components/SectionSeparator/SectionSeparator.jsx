import PropTypes from 'prop-types'

import { StyledDiamond } from '../../styles/StyledDiamond';

const SectionSeparator = ({ text }) =>
  <div className="container-fluid" style={{ margin: "30px 0" }}>
    <div className="row">
      <hr className="col" />
      <div className="col d-flex justify-content-around">
        <StyledDiamond />
        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.5em'
        }}>{text}</p>
        <StyledDiamond />
      </div>
      <hr className="col" />
    </div>
  </div>

SectionSeparator.propTypes = {
  text: PropTypes.string
}

export { SectionSeparator }