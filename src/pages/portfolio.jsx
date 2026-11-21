import React from 'react';

export default function PortfolioPage() {
  return (
    <>
  <main id={"main"}>
    <section id={"portfolio"}>
      <div className={"container wow fadeInUp"}>
        <div className={"section-header"}>
          <h3 className={"section-title"} style={{"marginBottom": "100px"}}>
            Portfolio
          </h3>
        </div>
        <div className={"row"}>
          <div className={"col-lg-12"}>
            <ul id={"portfolio-flters"}>
              <li data-filter={".filter-app, .filter-card, .filter-logo, .filter-web"} className={"filter-active"}>
                All
              </li>
              <li data-filter={".filter-app"}>
                App
              </li>
              <li data-filter={".filter-card"}>
                Hybrid App
              </li>
              <li data-filter={".filter-logo"}>
                Logo
              </li>
              <li data-filter={".filter-web"}>
                Web
              </li>
            </ul>
          </div>
        </div>
        <div className={"row"} id={"portfolio-wrapper"}>
          <div className={"col-lg-6 col-md-6 portfolio-item filter-app"}>
            <img src={"img/portfolio/flightapp.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                WingWays
              </h4>
              <span>
                Mobile Application
              </span>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 portfolio-item filter-web"}>
            <img src={"img/portfolio/furnistore.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                FurniStore
              </h4>
              <span>
                Website
              </span>
            </div>
          </div>
          <div className={"col-lg-12 col-md-12 portfolio-item filter-web"}>
            <img src={"img/portfolio/envyelegance.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                Envyelegance
              </h4>
              <span>
                Website
              </span>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 portfolio-item filter-app"}>
            <img src={"img/portfolio/ecommerceapp.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                BasketBreeze
              </h4>
              <span>
                Mobile Application
              </span>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 portfolio-item filter-logo"}>
            <img src={"img/portfolio/tempo.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                Tempo Tide Studios
              </h4>
              <span>
                Logo
              </span>
            </div>
          </div>
          <div className={"col-lg-12 col-md-12 portfolio-item filter-web"}>
            <img src={"img/portfolio/fitfit.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                Fitfit
              </h4>
              <span>
                Website
              </span>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 portfolio-item filter-logo"}>
            <img src={"img/portfolio/turbsherbs.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                Turbs Herbs
              </h4>
              <span>
                Logo
              </span>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 portfolio-item filter-app"}>
            <img src={"img/portfolio/landmarked.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                Land Marked
              </h4>
              <span>
                Mobile Application
              </span>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 portfolio-item filter-web"}>
            <img src={"img/portfolio/lando.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                Lando
              </h4>
              <span>
                Website
              </span>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 portfolio-item filter-app"}>
            <img src={"img/portfolio/pizzapinch.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                Pizza Pinch
              </h4>
              <span>
                Mobile Application
              </span>
            </div>
          </div>
          <div className={"col-lg-12 col-md-12 portfolio-item filter-web"}>
            <img src={"img/portfolio/land marked.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                Land Marked
              </h4>
              <span>
                Web Application
              </span>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 portfolio-item filter-app"}>
            <img src={"img/portfolio/dinewave.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                Dine Wave
              </h4>
              <span>
                Mobile Application
              </span>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 portfolio-item filter-card"}>
            <img src={"img/portfolio/trend threads.png"} className={"img-fluid"} alt={""} />
            <div className={"details"}>
              <h4>
                Trend Threads
              </h4>
              <span>
                Hybrid Application
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
