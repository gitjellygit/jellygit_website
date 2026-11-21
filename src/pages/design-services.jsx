import React from 'react';

export default function DesignservicesPage() {
  return (
    <>
  <div className={"header-bannner"}>
    <div className={"container"}>
      <h2>
        Design Services
      </h2>
    </div>
    <div className={"clearfix"}></div>
  </div>
  <main id={"main"}>
    <section id={"features"}>
      <div className={"container"}>
        <p className={"text-center top_paragraph"}>
          Your website and application is your reflection. Do you have any
				lasting effects? Partner with an professional designer company, who is best in designing beautiful
				designs with SEO in mind.
        </p>
      </div>
    </section>
    <section id={"wireframe"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-6"}>
            <h2>
              JELLYGIT Responsive Design Services
            </h2>
            <p>
              <strong>
                Mobile first
              </strong>
              <br />
              A mobile-first approach is one of the best strategies for an
						adaptive product. Working your way through mobile will define the heart of the product
						experience and the necessary functionality.
            </p>
            <p>
              <strong>
                Flexible and fluid grid
              </strong>
              <br />
              Fluid grids allow you to create responsive screen
						sizes to ensure an intuitive experience on any device.
            </p>
          </div>
          <div className={"col-md-6 col-sm-6"}>
            <div className={"product-item-img"}>
              <img src={"img/services/responsive.png"} className={"image-responsive"} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id={"uidesign"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-6"}>
            <div className={"product-item-img-gray"}>
              <img className={"image-responsive"} src={"img/services/Perspective-PSD.jpg"} alt={""} />
            </div>
          </div>
          <div className={"col-md-6 col-sm-6"}>
            <h2>
              PSD Design
            </h2>
            <p>
              Getting a beautiful, custom, creative and modern design of the highest quality at a
						pocket-friendly price within less time is possible on our doorstep. However you can consider
						combining these features as impossible. But our designers will not only distribute this combo to
						you, but also quench your thirst for quality.
            </p>
            <p>
              We bring high quality PSD designs to meet your design requirements Pixel perfect design solution
						for your project concept.
            </p>
            <p>
              <strong>
                Web Design
              </strong>
              <br />
              Responsive design, corporate site, blog, ecommerce site, sales
						page, landing page, anything related to the web, we will design your idea.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id={"htmlconversion"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-6"}>
            <h2>
              Website Model Design
            </h2>
            <p>
              The world has become tech savvy! People just want everything on their fingertips. Is your website
						meeting their needs? JELLYGIT is a leading custom web design company that helps search engines
						create customized, highly intuitive websites that effectively optimize conversion rates and
						increase your revenue.
            </p>
            <p>
              <strong>
                Custom Website Designing Services
              </strong>
              <br />
              In the changing digital scenario, each company requires a website regardless of purpose. Website
						marketing is a big piece of content that creates more calls, leads, referrals and new customer
						base.
            </p>
          </div>
          <div className={"col-md-6 col-sm-6"}>
            <div className={"product-item-img"}>
              <img className={"image-responsive"} src={"img/services/pitchceleb_1.jpg"} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={"case-study-wrapper imgs"}>
      <div className={"case-study  pb"} style={{"position": "relative", "top": "0px", "left": "0px"}}>
        <div className={"casestudy-block clearfix"}>
          <div className={"gallery-block clearfix"}>
            <ul className={"gallery-img"}>
              <li>
                <img src={"img/thumb3.jpg"} alt={"Template1"} />
              </li>
              <li>
                <img src={"img/thumb2.jpg"} alt={"Template2"} />
              </li>
            </ul>
          </div>
          <div className={"project-detail"}>
            <h2>
              Explore Our Web Design Projects
            </h2>
            <p>
              Have a glimpse to the range of the brilliant web design projects delivered by us.
            </p>
            <a href={"portfolio"} className={"btn btn-default custom-btn"}>
              BROWSE OUR PORTFOLIO
            </a>
          </div>
          <div className={"rotate-logo"} id={"leftgear"}></div>
          <div className={"radius-rotate"}></div>
        </div>
        <div className={"parallax-img parallax"} style={{"transform": "rotate(7.5deg)"}}></div>
      </div>
    </section>
    <div className={"modal fade"} id={"myModal_2"}>
      <div className={"modal-dialog"} role={"document"}>
        <div className={"modal-content"}>
          <div className={"modal-header"}>
            <h4 className={"modal-title"}>
              JELLYGIT Responsive Design Services
            </h4>
            <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
              <span aria-hidden={"true"}>
                ×
              </span>
            </button>
          </div>
          <div className={"modal-body"}>
            <p>
              <strong>
                Download speed and graphics
              </strong>
              <br />
              Not only does Page Speed ​​affect your SEO and
						Ranking, a fast product is particularly important for users, which results in high conversion
						and usage rates.
            </p>
            <h4>
              How JELLYGIT works
            </h4>
            <p>
              <strong>
                #1. Talk to one of our domain experts
              </strong>
              <br />
              The top directors of engineering,
						design, and finance will work with you to understand your goals, technical requirements, and
						team mobility.
            </p>
            <p>
              <strong>
                #2. Work with hand-picked talents
              </strong>
              <br />
              Within days, we will introduce you to
						some experts for your project. Average match time is less than 24 hours.
            </p>
            <p>
              <strong>
                #3. The Right Fit, Guaranteed
              </strong>
              <br />
              Work with your new team member for the trial
						period (pay only when satisfied), to ensure that they are the perfect fit before the engagement
						begins.
            </p>
          </div>
          <div className={"modal-footer"}>
            <button type={"button"} className={"btn btn-default"} data-dismiss={"modal"}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className={"modal fade"} id={"myModal_3"}>
      <div className={"modal-dialog"} role={"document"}>
        <div className={"modal-content"}>
          <div className={"modal-header"}>
            <h4 className={"modal-title"}>
              PSD Design
            </h4>
            <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
              <span aria-hidden={"true"}>
                ×
              </span>
            </button>
          </div>
          <div className={"modal-body"}>
            <p>
              <strong>
                Responsive Design Website
              </strong>
              <br />
              Get user oriented mobile and tablet compatible
						designs for your next app or mobile to get your website ready quickly.
            </p>
            <p>
              <strong>
                UI design
              </strong>
              <br />
              To confuse the way users navigate through a web or application
						UI, plan your user experience with us and make it easy.
            </p>
            <p>
              <strong>
                How we do it:
              </strong>
              <br />
              We work with you, study your thoughts and concepts and
						process the design in a set manner, so that you get what you want with the least amount of time
						and with high quality. Due to the variety of different cultures around the world, customers'
						pocket-friendly price catering.
            </p>
            <p>
              <strong>
                Discover
              </strong>
              <br />
              We are working closely with you by understanding the scope and
						need of the project and list the details.
            </p>
            <p>
              <strong>
                Plan
              </strong>
              <br />
              We curate that idea, which you created a concept using wireframe, it
						underlines the skeleton for the design.
            </p>
            <p>
              <strong>
                Executed
              </strong>
              <br />
              The final design takes its shape at this level and this idea comes
						to life representing the concept.
            </p>
            <p>
              <strong>
                Delivery
              </strong>
              <br />
              We assign the original source files along with all the resources
						used to create custom sources.
            </p>
          </div>
          <div className={"modal-footer"}>
            <button type={"button"} className={"btn btn-default"} data-dismiss={"modal"}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className={"modal fade"} id={"myModal_4"}>
      <div className={"modal-dialog"} role={"document"}>
        <div className={"modal-content"}>
          <div className={"modal-header"}>
            <h4 className={"modal-title"}>
              Website Model Design
            </h4>
            <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
              <span aria-hidden={"true"}>
                ×
              </span>
            </button>
          </div>
          <div className={"modal-body"}>
            <p>
              In Source Soft Solutions, we have a highly skilled team of website designers who specializes in
						designing and producing responsive websites that look beautiful across all devices including
						smartphones, tablets, laptops and desktops. A customer-centric website will help you generate
						more traffic, increase conversion rates, and get visitors more often. Your goals are important
						to us, and we work with you to create the right design for every need.
            </p>
            <p>
              <strong>
                JELLYGIT works in following manner :
              </strong>
              <br />
              We understand that the great web
						design is the perfect blend of an airite code to maximize the right colors, correct layout and
						traffic and conversions. A quality design always comes with the scope of further improvement.
						Our team does not believe in filling the website with graphics only, but they want to offer
						clear design and navigation, which seem to be enough compelling for visitors to stay on the
						page. You can be assured of working with:
            </p>
            <ul className={"default-list"}>
              <li>
                Professional and creative team
              </li>
              <li>
                Project management system
              </li>
              <li>
                Personal and consultative approach
              </li>
              <li>
                Quality control over time
              </li>
              <li>
                Experienced team in the industry
              </li>
              <li>
                Time Boxing Project Plan
              </li>
              <li>
                Productive results
              </li>
              <li>
                Competitive price structure
              </li>
              <li>
                Internal audit team
              </li>
              <li>
                Phone, Chat and Skype
              </li>
            </ul>
          </div>
          <div className={"modal-footer"}>
            <button type={"button"} className={"btn btn-default"} data-dismiss={"modal"}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
    </>
  );
}
