import React from 'react';
import AosInit from '../components/AosInit.jsx';

export default function BrandingPage() {
  return (
    <>
  <meta charset={"UTF-8"} />
  <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
  <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"} />
  <style dangerouslySetInnerHTML={{__html: "\n        /* Custom CSS for images */\n        .full-width-img {\n            width: 100%;\n            height: auto;\n        }\n\n        .gif-heading {\n            padding-bottom: 50px;\n        }\n\n        .gif-heading h1 {\n            font-weight: 800;\n        }\n    "}} />
  <link href={"https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"} rel={"stylesheet"} />
  <div className={"container-fluid pt-5 d-none d-sm-block"}>
    <div className={"row"}>
      <div className={"col"}>
        <img src={"img\\branding\\Roadmap.png"} className={"full-width-img"} alt={"Image 1"} />
      </div>
    </div>
    <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
      <div className={"col"}>
        <img src={"img\\branding\\Roadmap-1.png"} className={"full-width-img"} alt={"Image 2"} />
      </div>
    </div>
    <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
      <div className={"col"}>
        <img src={"img\\branding\\Roadmap-2.png"} className={"full-width-img"} alt={"Image 2"} />
      </div>
    </div>
    <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
      <div className={"col"}>
        <img src={"img\\branding\\Roadmap-3.png"} className={"full-width-img"} alt={"Image 2"} />
      </div>
    </div>
    <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
      <div className={"col"}>
        <img src={"img\\branding\\Roadmap-5.png"} className={"full-width-img"} alt={"Image 2"} />
      </div>
    </div>
    <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
      <div className={"col"}>
        <img src={"img\\branding\\Roadmap-4.png"} className={"full-width-img"} alt={"Image 2"} />
      </div>
    </div>
    <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
      <div className={"col"}>
        <img src={"img\\branding\\Roadmap-6.png"} className={"full-width-img"} alt={"Image 2"} />
      </div>
    </div>
    <div className={"row"} data-aos={"fade-up"} data-aos-duration={"2000"}>
      <div className={"col"}>
        <img src={"img\\branding\\Roadmap-success.png"} className={"full-width-img"} alt={"Image 2"} />
      </div>
    </div>
  </div>
  <div className={"container-fluid pt-5"}>
    <div className={"d-block d-sm-none"}>
      <div className={"row mobile-imgs"}>
        <div className={"col"}>
          <img src={"img\\branding\\Roadmap-mobile-1.png"} className={"full-width-img"} alt={"Image 1"} />
        </div>
      </div>
      <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
        <div className={"col"}>
          <img src={"img\\branding\\Roadmap-mobile-2.png"} className={"full-width-img"} alt={"Image 2"} />
        </div>
      </div>
      <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
        <div className={"col"}>
          <img src={"img\\branding\\Roadmap-mobile-3.png"} className={"full-width-img"} alt={"Image 2"} />
        </div>
      </div>
      <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
        <div className={"col"}>
          <img src={"img\\branding\\Roadmap-mobile-4.png"} className={"full-width-img"} alt={"Image 2"} />
        </div>
      </div>
      <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
        <div className={"col"}>
          <img src={"img\\branding\\Roadmap-mobile-5.png"} className={"full-width-img"} alt={"Image 2"} />
        </div>
      </div>
      <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
        <div className={"col"}>
          <img src={"img\\branding\\Roadmap-mobile-6.png"} className={"full-width-img"} alt={"Image 2"} />
        </div>
      </div>
      <div className={"row"} data-aos={"fade-up"} data-aos-duration={"1000"}>
        <div className={"col"}>
          <img src={"img\\branding\\Roadmap-mobile-7.png"} className={"full-width-img"} alt={"Image 2"} />
        </div>
      </div>
      <div className={"row"} data-aos={"fade-up"} data-aos-duration={"2000"}>
        <div className={"col"}>
          <img src={"img\\branding\\Roadmap-mobile-success.png"} className={"full-width-img"} alt={"Image 2"} />
        </div>
      </div>
    </div>
  </div>
  <AosInit />
    </>
  );
}
