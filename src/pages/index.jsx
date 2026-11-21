import React, { useEffect } from 'react';
import { TechText, CircularCarousel, Reveal } from '../components/Fx.jsx';
import particlesConfig from '../particles-config.json';

const ORBIT_SERVICES = [
  { href: '/product-engineering-services', label: 'Product Engineering', tag: 'Engineering', icon: 'fa fa-cogs', image: '/img/services/custom-software-application.png' },
  { href: '/mobility-services', label: 'Mobility Services', tag: 'Mobile', icon: 'fa fa-mobile', image: '/img/services/Mobile-App-Maintenance.jpg' },
  { href: '/business-technology-services', label: 'Business Technology', tag: 'Consulting', icon: 'fa fa-briefcase', image: '/img/services/digital-commerce.jpg' },
  { href: '/cmsdevelopment-services', label: 'CMS Development', tag: 'Web', icon: 'fa fa-files-o', image: '/img/services/custom_cms.png' },
  { href: '/digital-marketing-services', label: 'Digital Marketing', tag: 'Marketing', icon: 'fa fa-bullhorn', image: '/img/services/contentmarketing.png' },
  { href: '/design-services', label: 'Design Services', tag: 'Creative', icon: 'fa fa-paint-brush', image: '/img/services/Perspective-PSD.jpg' },
  { href: '/qat-services', label: 'QA & Testing', tag: 'Quality', icon: 'fa fa-check-square-o', image: '/img/services/Software-Testing.png' },
  { href: '/digital-transformation-services', label: 'Digital Transformation', tag: 'Strategy', icon: 'fa fa-line-chart', image: '/img/services/legacy-application.jpg' },
  { href: '/technology-consultancy-services', label: 'Tech Consultancy', tag: 'Advisory', icon: 'fa fa-lightbulb-o', image: '/img/services/digital-strategy-counculting.png' },
  { href: '/staffingsolution', label: 'Staffing Solutions', tag: 'Talent', icon: 'fa fa-users', image: '/img/team-1.jpg' },
  { href: '/products', label: 'JellyGit ERP', tag: 'Product', icon: 'fa fa-database', image: '/img/products/erp-img.png' },
  { href: '/branding', label: 'Branding', tag: 'Identity', icon: 'fa fa-star', image: '/img/Public_Relations.png' },
];

export default function IndexPage() {
  useEffect(() => {
    // particles.js is loaded globally by Layout; init once available
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (window.particlesJS) {
        clearInterval(timer);
        try {
          window.particlesJS('particles-js', particlesConfig);
        } catch (e) {
          console.warn('particles init:', e);
        }
      } else if (tries > 80) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
  <style dangerouslySetInnerHTML={{__html: "\n  .carousel-control-prev {\n    left: auto;\n    right: 40px;\n    display: none;\n  }\n"}} />
  <div id={"particles-js"}>
    <div className={"hero2"}>
      <div className={"helper"}>
        <h1>
          Welcome to the JELLYGIT
        </h1>
        <p className={"top_description"}>
          With the powerful spirit, creativity and talent, JELLYGIT have an expertise team to
        create visual identities, digital experiences and emotional connections between the people and brand. We make
        your website stand out.
        </p>
        <p className={"top_description"}>
          JELLYGIT with the power of teamwork, we are a unit of creative professionals, building
        a bridge between marketing strategy and today's forward thinking digital technology. To create dynamic
        solutions, we'll partner with you, paving the way for future success and growth.
        </p>
        <div className={"hero-tech-line"}>
          We craft <TechText words={['Web Applications', 'Mobile Apps', 'ERP Solutions', 'AI & Automation', 'UI/UX Design', 'Cloud & DevOps']} />
        </div>
        <div className={"hero-cta"}>
          <a href={"/services"}>Explore Services</a>
          <a href={"/contact"} className={"ghost"}>Get in Touch</a>
        </div>
      </div>
    </div>
  </div>
  <div className={"clear"}></div>
  <section id={"myinfo"}>
    <div className={"container"}>
      <div className={"upper_layer"}>
        <div className={"row"}>
          <div className={"col-md-4 text-center"}>
            <div className={"media-icon"}>
              <i className={"fa fa-bar-chart"}></i>
            </div>
            <div className={"media-details"}>
              <h4 className={"media-title"}>
                Mission
              </h4>
              <p>
                Embracing the digital future, we drive progress by enabling businesses to thrive through innovative
              engineering and consulting services that foster competitiveness and transformation.
              </p>
            </div>
          </div>
          <div className={"col-md-4 text-center"}>
            <div className={"media-icon"}>
              <i className={"fa fa-line-chart"}></i>
            </div>
            <div className={"media-details"}>
              <h4 className={"media-title"}>
                Vision
              </h4>
              <p>
                We aim to grasp your needs and propose fitting solutions. Our focus is on delivering value, not inflating
              costs. We offer essentials that truly matter to you and your business, ensuring a straightforward,
              mutually beneficial partnership.
              </p>
            </div>
          </div>
          <div className={"col-md-4 text-center"}>
            <div className={"media-icon"}>
              <i className={"fa fa-area-chart"}></i>
            </div>
            <div className={"media-details"}>
              <h4 className={"media-title"}>
                Custom Service
              </h4>
              <p>
                We offer cost-effective solutions tailored to your needs, optimizing distribution based on your business
              goals. As Custom Business Solution Providers, our technical expertise drives results for your growth.
              Benefit from our technology platforms for the best outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <main id={"main"}>
    <section id={"strategize"}>
      <div className={"container"}>
        <div id={"spiner"} className={"col-md-8 col-sm-8 col-xs-12 pull-left"}>
          <img src={"img/wwd-spinner.png"} alt={"Design Strategize image"} />
        </div>
        <div className={"spin_content col-md-4 col-sm-4 col-xs-12 pull-left"}>
          <h3 className={"spin_head"}>
            Think. Plan. Create. Achieve
          </h3>
          <p className={"spin_desc"}>
            Our specialists come together with the most viable solution to match the trends of your
          industry and brainstorm and serve your clients optimally.
          </p>
          <p className={"spin_desc"}>
            While planning ideas received while brainstorming, we create blueprints for the project
          plan. We decide to step in the order of priority.
          </p>
          <p className={"spin_desc"}>
            We then put our plan into actions to design and develop the most extraordinary solution,
          which shines your business with success.
          </p>
          <p className={"spin_desc"}>
            Result oriented approach of JELLYGIT helps your business gain practical results from our
          solutions.
          </p>
        </div>
      </div>
    </section>
    <div className={"clear"}></div>
    <section className={"orbit-section"}>
      <div className={"container"}>
        <Reveal>
          <h2 className={"fx-heading"}>What We Do</h2>
          <p className={"orbit-subtitle"}>Hover to pause — click any service to dive in</p>
        </Reveal>
        <Reveal delay={150}>
          <CircularCarousel items={ORBIT_SERVICES} />
        </Reveal>
        <p className={"orbit-hint"}>12+ service lines · rotating showcase</p>
      </div>
    </section>
    <section id={"services"}>
      <div className={"container wow fadeIn"}>
        <div className={"section-header"}>
          <h3 className={"section-title"}>
            Services
          </h3>
          <p className={"section-description"}></p>
        </div>
        <div className={"row"}>
          <div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={"0.2s"}>
            <div className={"box"}>
              <div className={"icon"}>
                <a href={""}>
                  <i className={"fa fa-desktop"}></i>
                </a>
              </div>
              <h4 className={"title"}>
                <a href={""}>
                  Web Design
                </a>
              </h4>
              <p className={"description"}>
                The design is never stable, and any brand that wants to invest in a new site wants to
              see and feel contemporary. But the look behind the website design should stand the test of time.
              Great design has not been made in a vacuum.
              </p>
              <p className={"description"}>
                Our designers dive deeply to douse themselves in their industry and their brand
              beauty. In our collaborative process, you and your team have to be included at every step, to ensure that
              your new site is something that truly represents you and your business, as well as taking you to the next
              level.
              </p>
            </div>
          </div>
          <div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={"0.4s"}>
            <div className={"box"}>
              <div className={"icon"}>
                <a href={""}>
                  <i className={"fa fa-code"}></i>
                </a>
              </div>
              <h4 className={"title"}>
                <a href={""}>
                  Web/Ecommerce Development
                </a>
              </h4>
              <p className={"description"}>
                Building any successful website is not an accident. In technique, in the process, to
              assemble the right team, planning, communication and experience is needed for every aspect of the effort.
              </p>
              <p className={"description"}>
                At JELLYGIT “We don't just build up websites, we build the websites that SELLS” , we
              have developed an adaptive application development framework that covers the full scope of software
              development lifecycle to deliver the best of design, development and distribution practices.
              </p>
            </div>
          </div>
          <div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={"0.6s"}>
            <div className={"box"}>
              <div className={"icon"}>
                <a href={""}>
                  <i className={"fa fa-globe"}></i>
                </a>
              </div>
              <h4 className={"title"}>
                <a href={""}>
                  Data Analytics and Reporting
                </a>
              </h4>
              <p className={"description"}>
                We make you unlock the ture potential of your data to make successful business
              decisions.
              </p>
              <p className={"description"}>
                JELLYGIT has a team of Big Data architects, data scientists, engineers and
              developers who specialize in HortonWorks, Cloudera, Spark, Elastic Search, AWS EMR, and Oracle BDA Hadoop
              services with expertise in product administration, analytics, architecture, design, and development.
              </p>
            </div>
          </div>
          <div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={"0.2s"}>
            <div className={"box"}>
              <div className={"icon"}>
                <a href={""}>
                  <i className={"fa fa-mobile"}></i>
                </a>
              </div>
              <h4 className={"title"}>
                <a href={""}>
                  Mobile Application
                </a>
              </h4>
              <p className={"description"}>
                We firmly believe that with mobile applications, development services should cover
              more than just coding. Our mobile app developer works with you through mobile strategy, mobile app design,
              development, app quality assurance and delivery. We also offer specialized enterprise application
              development services that can be customized to suit your business needs, including hiring mobile app
              developers for employee growth; Long-term team integration; And full service application development.
              </p>
            </div>
          </div>
          <div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={"0.4s"}>
            <div className={"box"}>
              <div className={"icon"}>
                <a href={""}>
                  <i className={"fa fa-search"}></i>
                </a>
              </div>
              <h4 className={"title"}>
                <a href={""}>
                  Seo
                </a>
              </h4>
              <p className={"description"}>
                The rapid growth of digital media has changed the way people connect, using the
              techniques given by digital medium to businesses, which are forcing customers to reinforce their digital
              marketing strategies.
              </p>
              <p className={"description"}>
                JELLYGIT helps their clients to get more website traffic and potential customers with
              professional SEO services. We strive to achieve your company's high ranking, increase revenue and get a
              steady stream of new customers with SEO.com's award-winning search engine optimization services.
              </p>
            </div>
          </div>
          <div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={"0.6s"}>
            <div className={"box"}>
              <div className={"icon"}>
                <a href={""}>
                  <i className={"fa fa-joomla"}></i>
                </a>
              </div>
              <h4 className={"title"}>
                <a href={""}>
                  Consulting Services
                </a>
              </h4>
              <p className={"description"}>
                JELLYGIT consulting services brings you the best resources globally for smooth
              running of your products/services. We ensure clients satisfaction by providing exactly what is needed.
              </p>
              <p className={"description"}>
                PowerBuilder, Power BI, Data Science consulting and Data analytics and Reporting
              services are our core strength and we firmly believe in providing the best in the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id={"call-to-action"}>
      <div className={"container wow fadeIn"}>
        <div className={"row"}>
          <div className={"col-lg-12 text-center text-lg-center"}>
            <h3 className={"cta-title"}>
              Our work process geared to gain success
            </h3>
            <p className={"cta-text"}>
              We are beyond our client's expectations with our active and innovative approach. We not
            only focus on completing the project, but also provide solutions that help our customers stay ahead of their
            competitors two steps ahead. Our customers are not only satisfied but happy with our services.
            </p>
            <p className={"cta-text"}>
              Our passion in JELLYGIT is to provide innovative, highly functional, visually appealing
            and feature-rich website designs and mobile applications as well as digital marketing programs that enhance
            business growth. We keep ourselves for the highest standards of creative and technical excellence.
            Regardless of the scope of every customer, size or project, JELLYGIT can expect nothing from the lively,
            experienced, dedicated and marketing savvy staff except best design, customer service and professionalism.
            </p>
            <p className={"cta-text"}>
              Our vision and strategies are based on complete transparency and are guided by ethical
            practices.
            </p>
            <p className={"cta-text"}>
              We are trying to become a global solution provider in IT solutions with focus on
            innovation.
            </p>
            <p className={"cta-text"}>
              We understand the aspirations of the customers and align their objectives accordingly.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id={"why_JELLYGIT"}>
      <div className={"section-header"}>
        <h3 className={"section-title"}>
          Why JELLYGIT Only?
        </h3>
      </div>
      <div id={"myCarousel"} className={"carousel slide"} data-ride={"carousel"}>
        <ol className={"carousel-indicators"}>
          <li data-target={"#myCarousel"} data-slide-to={"0"} className={""}></li>
          <li data-target={"#myCarousel"} data-slide-to={"1"} className={""}></li>
          <li data-target={"#myCarousel"} data-slide-to={"2"} className={"active"}></li>
        </ol>
        <div className={"carousel-inner"}>
          <div className={"carousel-item"}>
            <div className={"img-box"}>
              <img src={"img/review_profile.png"} alt={""} />
            </div>
            <p className={"testimonial"}>
              One of the finest tech partner we could have found for our website and mobile apps.
            Super work done. Impressed forever.
            </p>
            <p className={"overview"}>
              <b>
                Vineet Kumar
              </b>
              CEO
              <b>
                Innovyt
              </b>
            </p>
            <div className={"star-rating"}>
              <ul className={"list-inline"}>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star-o"}></i>
                </li>
              </ul>
            </div>
          </div>
          <div className={"carousel-item"}>
            <div className={"img-box"}>
              <img src={"img/review_profile.png"} alt={""} />
            </div>
            <p className={"testimonial"}>
              Amazing experience with these guys, super cool and professional leader. Would love to
            do all work with these guys.
            </p>
            <p className={"overview"}>
              <b>
                Deepak Rao
              </b>
              Owner
              <b>
                Vijyant Infotech
              </b>
            </p>
            <div className={"star-rating"}>
              <ul className={"list-inline"}>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star-o"}></i>
                </li>
              </ul>
            </div>
          </div>
          <div className={"carousel-item active"}>
            <div className={"img-box"}>
              <img src={"img/review_profile.png"} alt={""} />
            </div>
            <p className={"testimonial"}>
              Talented developers with skilled designers. Great leadership ! Most recommended for any
            website/ app/ Consultancy related work.
            </p>
            <p className={"overview"}>
              <b>
                Benny Lauria
              </b>
              CEO, Co-Founder
              <b>
                Pradiso Ltd International Real Estate
              </b>
            </p>
            <div className={"star-rating"}>
              <ul className={"list-inline"}>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star"}></i>
                </li>
                <li className={"list-inline-item"}>
                  <i className={"fa fa-star-half-o"}></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a className={"carousel-control-prev"} href={"#myCarousel"} data-slide={"prev"}>
          <i className={"fa fa-angle-left"}></i>
        </a>
        <a className={"carousel-control-next"} href={"#myCarousel"} data-slide={"next"}>
          <i className={"fa fa-angle-right"}></i>
        </a>
      </div>
    </section>
  </main>
    </>
  );
}
