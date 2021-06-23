import { facebookIcon, twitterIcon, instagramIcon, pinterestIcon } from './AwesomeIcons';
import { QuickLinks } from './Nav';

const socialMediaLinks = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon]

const Footer = () =>
  <>
    <footer className="bg-dark text-white">
      <div className="container-fluid p-5">
        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Shops</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">New In</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Women</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Men</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Shoes</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Bags & Accessories</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Top Brands</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Sale & Special Offers</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Lookbook</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Information</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">About us</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Custoemr Service</a>
                </li>
                <li>
                  <a href="#!" className="text-white">New Collection</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Best Sellers</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Manufacturers</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Privacy policy</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Terms & condition</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Blog</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Customer Service</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Search Terms</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Advanced Search</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Orders and Returns</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Contact Us</a>
                </li>
                <li>
                  <a href="#!" className="text-white">RSS</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Help & FAQs</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Consultant</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Store Locations</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Stay connected</h5>

              <section className="mb-4">
                <QuickLinks links={socialMediaLinks} />
              </section>

              <section className="">
                <form action="">
                  <div className="row d-flex flex-column">
                    <div className="col-auto">
                      <p className="pt-2">
                        <strong>SUBSCRIBE in OUR NEWS LETTER</strong>
                      </p>
                    </div>

                    <div className="col-md-5 col-12">
                      <div className="form-outline form-white mb-4">
                        <input type="email" id="form5Example2" className="form-control" />
                        <label className="form-label" htmlFor="form5Example2">Email address</label>
                      </div>

                      <button type="submit" className="btn btn-outline-light">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </section>
      </div>
    </footer>
  </>

export { Footer }