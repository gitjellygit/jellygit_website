import React from 'react';

export default function SiteFooter() {
  return (
    <footer>
      <div className="container-fluid" style={{ width: '80%' }}>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="flogo" style={{ float: 'none', display: 'block' }}>
              <img src="/img/Logo.png" width="100" alt="JELLYGIT" />
            </div>
            <p>
              Relationship and collective effort always pays! Long term partners are the core of our success. It's a matter
              of few minutes that can change your business. We take great pleasure in understanding your goals, vision and
              strength.
            </p>
          </div>
          <div className="col-md-5 col-sm-5 col-xs-12 f_blog">
            <h4>Follow and Connect us at </h4>
            <div className="follow-us">
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/official.jellygit"><i className="fa fa-facebook"></i></a>
              <a target="_blank" rel="noreferrer" href="https://in.linkedin.com/company/jellygit"><i className="fa fa-linkedin"></i></a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jellygitofficial/?hl=en"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12 f_blog">
            <h4>Contact Info</h4>
            <p><i className="fa fa-phone foot_icon"></i> +91-9131652322</p>
            <p><i className="fa fa-envelope foot_icon"></i> contact@jellygit.com </p>
            <p><i className="fa fa-clock-o foot_icon"></i> Monday-Friday 12PM-3AM IST</p>
          </div>
        </div>
      </div>

      <div className="copyright-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center mobile_text">
              <p>Copyright © JELLYGIT 2022</p>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </footer>
  );
}
