import { colours } from './styles/commonColours';
import { ReactComponent as ReviewFemaleImg } from './img/sandra-dewi-review.svg';
import { ReactComponent as ReviewMaleImg } from './img/shaheer-sheikh-review.svg';

const Testemonials = () =>
  <div className="container-fluid" style={{
    backgroundColor: colours.straw
  }}>
    <div className="row pt-4 pb-4">
      <div className="col-lg-6 d-flex align-items-center">
        <ReviewFemaleImg />

        <div>
          <p>
            Sed ut perspiciatis
            unde omnis iste natus error sit
            voluptatem accusantium doloremque
          </p>

          <em className="mt-4">
            Sandra Dewi<br/>
            FASHION STYLISH
          </em>
        </div>

      </div>
      <div className="col-lg-6 d-flex align-items-center">
        <ReviewMaleImg />

        <div>
          <p>
            Sed ut perspiciatis
            unde omnis iste natus error sit
            voluptatem accusantium doloremque
          </p>

          <em className="mt-4">
            Shaheer Sheikh<br/>
            DESIGNER
          </em>
        </div>

      </div>
    </div>
  </div>

export { Testemonials }