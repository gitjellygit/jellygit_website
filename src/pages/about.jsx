import React from 'react';

export default function AboutPage() {
  return (
    <>
  <main id={"main"}>
    <section id={"about"}>
      <div className={"container"}>
        <div className={"row about-container"}>
          <div className={"col-lg-6 content order-lg-1 order-2"}>
            <h2 className={"title"}>
              ABOUT US
            </h2>
            <p className={"about-eft-con-p"}>
              We've been very fortunate with the team of meritorious individuals that compose Specialty of JELLYGIT and
            ensure our clients' needs are persistently met and exceeded. JELLYGIT in-house experts extend, analyze,
            strategize, build and deploy high performance, secure and scalable digital experiences while extending many
            industries and project types. Each member of the team brings a skill set that helps JELLYGIT grow your
            company.
            </p>
            <div className={"icon-box wow fadeInUp"}>
              <div className={"icon"}>
                <i className={"fa fa-balance-scale"}></i>
              </div>
              <h4 className={"title"}>
                Balance is necessary for us.
              </h4>
              <p className={"description"}>
                When we offer you the necessary technology to promote your business, then we focus on
              making a lasting impact on our personal level for technical support and other concerns.
              </p>
            </div>
            <div className={"icon-box wow fadeInUp"} data-wow-delay={"0.2s"}>
              <div className={"icon"}>
                <i className={"fa fa-road"}></i>
              </div>
              <h4 className={"title"}>
                We work with a new perspective.
              </h4>
              <p className={"description"}>
                Our young and enthusiastic workforce has more valuable resources than other forms of
              property. We have system engineers, IT consultants, network infrastructure designers and technicians who
              churn out effective work output and meet your business needs.
              </p>
            </div>
            <div className={"icon-box wow fadeInUp"} data-wow-delay={"0.4s"}>
              <div className={"icon"}>
                <i className={"fa fa-male"}></i>
              </div>
              <h4 className={"title"}>
                Our core competencies improve professions.
              </h4>
              <p className={"description"}>
                Security solutions, IP services for medium-sized business, technical support for end
              users, system integration for large organizations, and other service packages. They are only waiting for
              our services to be tapped.
              </p>
            </div>
          </div>
          <div className={"col-lg-6 background order-lg-2 order-1 wow fadeInRight"}></div>
        </div>
      </div>
    </section>
    <section id={"our_mission"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-6 col-xs-12 margin-lgb"}>
            <div className={"mission_block"}>
              <h2>
                Growth
              </h2>
              <p>
                Growth is about being constantly and professionally challenging and constantly stretching itself.
              JELLYGIT are encouraged to learn to unlock their potential through jumping on bravery and opportunity. Our
              team is the foundation of our growing business.
              </p>
            </div>
          </div>
          <div className={"col-md-6 col-sm-6 col-xs-12 margin-lgb"}>
            <div className={"mission_block"}>
              <h2>
                Innovation
              </h2>
              <p>
                Innovation is not necessarily about new technology, it is about challenging the norm: Identifying new
              approaches, procedures and methods for connecting dots. JELLYGIT introduce creative solutions, services
              and best practices for the community through the discovery of originality.
              </p>
            </div>
          </div>
          <div className={"col-md-6 col-sm-6 col-xs-12 margin-lgb"}>
            <div className={"mission_block"}>
              <h2>
                Openness
              </h2>
              <p>
                At JELLYGIT , we know that openness has a significant effect on the business, which is why we are
              committed to sharing knowledge, contribution and informed decisions. Members of our cross-functional team
              encourage dialogue, believe in each other and work consistently with good intentions.
              </p>
            </div>
          </div>
          <div className={"col-md-6 col-sm-6 col-xs-12 margin-lgb"}>
            <div className={"mission_block"}>
              <h2>
                Customer Satisfaction
              </h2>
              <p>
                JELLYGIT reputation gives an example of excellence in customer satisfaction. We respect unique qualities
              in our clients, recognize their continuous changing needs, and are responsive. It is paramount to fulfill
              our promises by providing state-of-the-art open source solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id={"facts"}>
      <div className={"container wow fadeIn"}>
        <div className={"section-header"}>
          <h3 className={"section-title"}>
            Facts
          </h3>
          <p className={"section-description"}>
            Connect with experts "Let JELLYGIT choose the best technology for your next
          project"
          </p>
          <p className={"section-description"}></p>
        </div>
        <div className={"row counters"}>
          <div className={"col-lg-3 col-6 text-center"}>
            <span data-toggle={"counter-up"}>
              13
            </span>
            <p>
              Clients
            </p>
          </div>
          <div className={"col-lg-3 col-6 text-center"}>
            <span data-toggle={"counter-up"}>
              33
            </span>
            <p>
              Projects
            </p>
          </div>
          <div className={"col-lg-3 col-6 text-center"}>
            <span data-toggle={"counter-up"}>
              900
            </span>
            <p>
              Hours Of Support
            </p>
          </div>
          <div className={"col-lg-3 col-6 text-center"}>
            <span data-toggle={"counter-up"}>
              32
            </span>
            <p>
              Hard Workers
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
