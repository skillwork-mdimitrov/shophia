import { colours } from '../../styles/commonColours';
import { ReactComponent as ReviewFemaleImg } from '../../img/sandra-dewi-review.svg';
import { ReactComponent as ReviewMaleImg } from '../../img/shaheer-sheikh-review.svg';
import { StyledAbsTriangleNeck } from '../../styles/StyledAbsTriangleNeck';

const Testemonials = () =>
  <div className="container-fluid" style={{
    backgroundColor: colours.straw,
    position: 'relative'
  }}>

    <StyledAbsTriangleNeck />

    <div className="row pt-4 pb-4">
      <div className="col-lg-6 d-flex align-items-center">
        <ReviewFemaleImg />

        <div>
          <p className="text-white" style={{ width: '50%' }}>
            Sed ut perspiciatis
            unde omnis iste natus error sit
            voluptatem accusantium doloremque
          </p>

          <em className="mt-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2em' }}>
            Sandra Dewi
          </em>
          <p>FASHION STYLISH</p>
        </div>

      </div>
      <div className="col-lg-6 d-flex align-items-center">
        <div>

          <div style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
            <p className="text-white" style={{ width: '50%', display: 'inline-flex', textAlign: 'end' }}>
              Sed ut perspiciatis
              unde omnis iste natus error sit
              voluptatem accusantium doloremque
            </p>

            <em className="mt-4" style={{ display: 'inline-flex', fontFamily: 'Playfair Display, serif', fontSize: '2em' }}>
              Shaheer Sheikh
            </em>
            <p>DESIGNER</p>
          </div>
        </div>

        <ReviewMaleImg />

      </div>
    </div>
  </div>

export { Testemonials }