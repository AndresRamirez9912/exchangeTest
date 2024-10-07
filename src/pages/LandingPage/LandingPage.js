import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TickerContainer from 'apex-web/lib/components/Ticker/TickerContainer';
import './LandingPage.css';
import {
  PageHashCheck,
  setSignupLinkQueryString,
  MenuToggle,
  MenuStylize
} from './helpers';
import config from '../../config';
import APLogo from 'apex-web/lib/components/common/APLogo/APLogo';

const LandingPage = (props, context) => {
  useEffect(() => {
    MenuToggle('initialize');
    PageHashCheck();
    setSignupLinkQueryString();

    window.onscroll = () => {
      PageHashCheck();
      MenuStylize();
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div id="landing">
      <div className="landing-content-container">
        <header>
          <nav className="nav-top-container">
            <a href="" className="nav-logo-link">
              <APLogo
                customClass="ap-logo__img standalone-form__logo__img"
                linkTo="/"
              />
            </a>
            <div className="landing-nav-menu">
              <a
                href="/login"
                className="ap-button__btn ap-button__btn--general">
                {context.t('Login')}
              </a>
              <a
                href="/signup"
                className="ap-button__btn ap-button__btn--general">
                {context.t('Signup')}
              </a>
              <div
                id="landing-nav-menu-toggle"
                className="landing-nav-menu-toggle">
                <span />
                <span />
                <span />
              </div>
              <div
                id="menu-wrapper"
                className="menu-wrapper"
                data-status="closed">
                <div className="menu-container">
                  <ul className="menu">
                    <li className="menu-item">
                      <a href="#home">
                        <span>{context.t('Home')}</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#features">
                        <span>{context.t('Features')}</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#features-expanded">
                        <span>{context.t('Features Expanded')}</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#about">
                        <span>{context.t('About')}</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#contact">
                        <span>{context.t('Contact')}</span>
                      </a>
                    </li>
                    <li className="menu-item only-show-on-mobile">
                      <a href="/login">
                        <span className="modal-btn login-btn">
                          {context.t('Login')}
                        </span>
                      </a>
                    </li>
                    <li className="menu-item only-show-on-mobile">
                      <a href="/signup">
                        <span className="modal-btn register-btn">
                          {context.t('Sign Up')}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section id="home" className="chapter">
          <div className="fullscreen-bg">
            <svg
              className="fullscreen-bg__svg"
              xmlns="http://www.w3.org/2000/svg"
              width="1416"
              height="941"
              viewBox="0 0 1416 941">
              <defs>
                <path id="a" d="M298 12h1416v953H298z" />
              </defs>
              <g fill="none" fillRule="evenodd" transform="translate(-298 -12)">
                <mask id="b" fill="#fff" />
                <g
                  stroke="#454952"
                  strokeOpacity=".8"
                  mask="url(#b)"
                  opacity=".4">
                  <path
                    className="path"
                    d="M422.655 125L545 247.206 363 429M529 385L406 507.34 501.17 602M552 617l123-122.34L579.83 400M646.659 243h136.2M628.333 501H469.868M884.333 501H725.868M1141.333 501H982.868M1397.333 501h-158.465M1653.333 501h-158.465M373.333 501H214.868M561.744 183h-52.558M884.333 183H725.868M1141.333 183H982.868M1397.333 183h-158.465M1653.333 183h-158.465M324.411 183h-109.55M415.333 341H256.868M672.333 341H513.868M927.333 341H768.868M1183.333 341h-158.465M1439.333 341h-158.465M1695.333 341h-158.465M415.333 818H256.868M672.333 818H513.868M927.333 818H768.868M1183.333 818h-158.465M1439.333 818h-158.465M1695.333 818h-158.465M503.333 659H344.868M758.333 659H599.868M1014.333 659H855.868M1271.333 659h-158.465M1527.333 659h-158.465M1783.333 659h-158.465M574.667 171.667l70.911 70.911M781.34 262.66L646.42 397.58M674.264 428.264l45.3 45.3M727.663 386h173.314M607 64l77.522 77.522M630 118.667H480.301M867 118.667H717.301M402 57l-79.369 79.369M1088 236L937 387l151-151zM805 215l64.78 64.78M1034 269.667H904.645M800 452h165L864.707 552M1136 228l152.924 152H1458M1234 230l66.496 66.496M1347 228l-29.326 29.326M1767 113l-183.792 183H1534M1133 436l112.917 113H1340"
                  />
                  <path
                    className="path"
                    d="M1044 459l100.444-100L1235 449.155M957 624H818v124M383.77 559L285 656.9 387 758M561 663l-92.555 93H425M892.819 225c49.2-48.349 73.249-72.523 72.145-72.523-1.105 0-33.76-32.826-97.964-98.477M1114 547l57.302 57H1321M1112 97l91.685 91.685M983 136L1116.05 2.95M1195 50l87.88 88H1405M1569 47l-132 132.225L1517.638 260M1550 463.876L1608.123 406 1814 611M1574 658l-74.528 74h-124.2M1567.657 541.657l90.764 90.764M1629 697l115.388 115.388M1584 843l-107.584 107.584M375.333 845v114.803M540 844l107.199 107.199M176 37.493L261.3 123 384 0M1437 574l57.428 57.428M394 150l-92 92.474L348.287 289M350.659 243h136.2M594 315l51-51M709.44 550L635 624h149M1364.183 425L1456 516.903 1351 622M986.643 547L1075 635.201 961 749M727 816V712H602M632 775H524.513L430 869M1176.31 748l72.69 72.788L1091 979M1049 770l69.645-69H1232M1269 691l91.394 91.394M1035 962l-97-97.012L984.983 818M880 840L771.257 948.743M666 845l89.81 89.81M1211 952l81.819-82H1469M1627 959l82.477-83H1839"
                  />
                </g>
              </g>
            </svg>
          </div>
          <h1>{context.t('Best In Breed Asset Exchange')}</h1>
          <p>
            {context.t('Lorem ipsum dolor sit amet, consectetur ')}
            <a href="/signup">{context.t('Suscipit Nibh')}</a>
            {context.t(
              ', sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            )}
          </p>
          <button>
            <a href="/signup">{context.t('Demo Our Platform')}</a>
          </button>
        </section>

        <div ap-widget="ticker" style={{ display: 'flex', overflow: 'hidden' }}>
          <TickerContainer />
        </div>

        <section id="features" className="chapter">
          <h1>{context.t('Key Features of Our Platform Software')}</h1>
          <article>
            <div className="row">
              <div className="col-sm content-container">
                <div className="content-top">
                  <img
                    className="content-icon"
                    src="/local/landing-page/images/icons/icon-chart-black.svg"
                    alt="icon1"
                  />
                  <h2>{context.t('Next-Gen Crypto Exchange')}</h2>
                </div>
                <p>
                  {context.t(
                    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, nunc nec mattis finibus, nulla eros suscipit nibh, sed posuere risus libero id libero.'
                  )}
                </p>
              </div>

              <div className="col-sm content-container">
                <div className="content-top">
                  <img
                    className="content-icon"
                    src="/local/landing-page/images/icons/icon-bitcoinBlockchain-black.svg"
                    alt="icon2"
                  />
                  <h2>{context.t('Market Data Streaming')}</h2>
                </div>
                <p>
                  {context.t(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, nunc nec mattis finibus, nulla eros suscipit nibh, sed posuere risus libero id libero.'
                  )}
                </p>
              </div>

              <div className="col-sm content-container">
                <div className="content-top">
                  <img
                    className="content-icon"
                    src="/local/landing-page/images/icons/icon-pantheon-black.svg"
                    alt="icon3"
                  />
                  <h2>{context.t('Advanced Financial Integration')}</h2>
                </div>
                <p>
                  {context.t(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, nunc nec mattis finibus, nulla eros suscipit nibh, sed posuere risus libero id libero.'
                  )}
                </p>
              </div>

              <div className="col-sm content-container">
                <div className="content-top">
                  <img
                    className="content-icon"
                    src="/local/landing-page/images/icons/icon-blockchain-black.svg"
                    alt="icon4"
                  />
                  <h2>{context.t('Modular Design System')}</h2>
                </div>
                <p>
                  {context.t(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, nunc nec mattis finibus, nulla eros suscipit nibh, sed posuere risus libero id libero.'
                  )}
                </p>
              </div>
            </div>
          </article>
        </section>

        <section id="features-expanded" className="chapter">
          <h1>{context.t('Key Features of Our Platform Software')}</h1>
          <article>
            <div className="row">
              <div className="col-lg content-container">
                <div className="col-flex">
                  <div className="content-top">
                    <img
                      className="content-icon"
                      src="/local/landing-page/images/icons/icon-chart-white.svg"
                      alt="icon1"
                    />
                    <h2>{context.t('Next-Gen Crypto Exchange')}</h2>
                  </div>
                  <h3>{context.t('Cryptocurrency sub headline text')}</h3>
                  <p>
                    {context.t(
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit amet est. Mauris sit amet massa vitae tortor condimentum lacinia quis. Velit egestas dui id ornare. Neque convallis a cras semper auctor.'
                    )}
                  </p>
                </div>

                <div className="col-md">
                  <img
                    className="content-img"
                    src="/local/landing-page/images/ap-desktop.png"
                    alt="icon1"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg content-container">
                <div className="col-md">
                  <img
                    className="content-img"
                    src="/local/landing-page/images/ap-mobile2.png"
                    alt="icon1"
                  />
                </div>

                <div className="col-flex">
                  <div className="content-top">
                    <img
                      className="content-icon"
                      src="/local/landing-page/images/icons/icon-bitcoinBlockchain-white.svg"
                      alt="icon2"
                    />
                    <h2>{context.t('Market Data Streaming')}</h2>
                  </div>
                  <h3>{context.t('Cryptocurrency sub headline text')}</h3>
                  <p>
                    {context.t(
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit amet est. Mauris sit amet massa vitae tortor condimentum lacinia quis. Velit egestas dui id ornare. Neque convallis a cras semper auctor.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section id="about" className="chapter">
          <h1>
            {context.t(
              'We provide the most actionable digital currency trading platform.'
            )}
          </h1>
          <article>
            <div className="row">
              <div className="col-md content-container">
                <div className="content-top">
                  <h2>{context.t('Enterprise Matching Engine')}</h2>
                </div>
                <p>
                  {context.t(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, nunc nec mattis finibus, nulla eros suscipit nibh, sed posuere risus libero id libero.'
                  )}
                </p>
              </div>

              <div className="col-md content-container">
                <div className="content-top">
                  <h2>{context.t('Trade Any Digital Currency')}</h2>
                </div>
                <p>
                  {context.t(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, nunc nec mattis finibus, nulla eros suscipit nibh, sed posuere risus libero id libero.'
                  )}
                </p>
              </div>

              <div className="col-md content-container">
                <div className="content-top">
                  <h2>{context.t('Superior Asset Security')}</h2>
                </div>
                <p>
                  {context.t(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, nunc nec mattis finibus, nulla eros suscipit nibh, sed posuere risus libero id libero.'
                  )}
                </p>
              </div>

              <div className="col-md content-container">
                <div className="content-top">
                  <h2>{context.t('We Are The Fastest')}</h2>
                </div>
                <p>
                  {context.t(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, nunc nec mattis finibus, nulla eros suscipit nibh, sed posuere risus libero id libero.'
                  )}
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="callToAction">
          <article>
            <div className="row">
              <div className="col-lg content-container">
                <div className="col-flex">
                  <h1>{context.t('Get Started Today.')}</h1>
                  <h2>{context.t('Join now for exchange access')}</h2>
                  <button>
                    <a href="/signup">{context.t('Demo Our Platform')}</a>
                  </button>
                </div>

                <div className="col-md">
                  <img
                    className="content-img box-shadow"
                    src="/local/landing-page/images/ap-trade.png"
                    alt="icon1"
                  />
                </div>
              </div>
            </div>
          </article>
        </section>

        <footer id="contact" className="chapter">
          <article>
            {/* <!-- <iframe async defer width="100%" height="250" id="map" src="https://maps.google.com/maps?q=500%207th%20Avenue%2C%2012th%20floor%2C%20New%20York%2C%20NY%2010018&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> --> */}
            <div className="row row-contact">
              <div className="col-md">
                <h2>{config.global.siteName}</h2>
                <h4>
                  {context.t(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, nunc nec mattis finibus, nulla eros suscipit nibh, sed posuere risus libero id libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, nunc nec mattis finibus, nulla eros suscipit nibh, sed posuere risus libero id libero.'
                  )}
                </h4>
                <ul className="social">
                  <li>
                    <a href="#facebook">
                      <img
                        alt="facebook"
                        src="/local/landing-page/images/icons/social/facebook.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <img
                        alt="twitter"
                        src="/local/landing-page/images/icons/social/twitter.svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#linkedin">
                      <img
                        alt="linkedin"
                        src="/local/landing-page/images/icons/social/linkedin.svg"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-flex">
                <h2>{context.t('Sitemap')}</h2>
                <ul>
                  <li>
                    <a href={config.SignupForm.TersAndServicesLink}>
                      {context.t('Terms')}
                    </a>
                  </li>
                  <li>
                    <a href={config.SignupForm.privacyPolicyLink}>
                      {context.t('Privacy Policy')}
                    </a>
                  </li>
                  <li>
                    <a href="">{context.t('Fees')}</a>
                  </li>
                  <li>
                    <a href={config.ApiKeys.documentationLink}>
                      {context.t('API')}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-flex">
                <h2>{context.t('Contact')}</h2>
                <ul>
                  <li>
                    <a
                      href="https://goo.gl/maps/cWsecsmYzQWNCercA"
                      target="blank">
                      New York Headquarters
                      <br />
                      228 Park Ave S
                      <br />
                      Suite 75687
                      <br />
                      New York, NY 10003-1502
                    </a>
                  </li>
                  <li>
                    <a href="">support@company.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </footer>
      </div>
    </div>
  );
};

LandingPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LandingPage;
