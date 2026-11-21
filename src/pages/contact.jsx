import React from 'react';

export default function ContactPage() {
  return (
    <>
  <main id={"main"}>
    <section id={"contact"}>
      <div className={"container wow fadeInUp"}>
        <div className={"section-header"}>
          <h3 className={"section-title"} style={{"marginBottom": "50px"}}>
            Contact
          </h3>
          <p className={"section-description"} style={{"fontSize": "16px"}}>
            We provide innovative and affordable solutions for all
          your website development, mobile app development and digital marketing needs. We believe great ideas for great
          results require great solutions. So, let us know how we can turn your thoughts into reality with our best
          solutions.
            <br />
            <br />
            We typically reply in 24 business hours.
          </p>
        </div>
      </div>
      <div className={"container wow fadeInUp"}>
        <div className={"row justify-content-center"}>
          <div className={"col-md-6"}>
            <div className={"map-box"} style={{"width": "100%", "position": "relative"}}>
              <iframe width={"100%"} height={"340"} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3460614128935!2d75.89432091496286!3d22.752535085090464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302aa50734b9f%3A0xc8b90510903511fb!2sMangal%20city%2C%20AB%20Rd%2C%20Scheme%2054%20PU4%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1652464604557!5m2!1sen!2sin"} frameBorder={"0"} scrolling={"no"} marginheight={"0"} marginwidth={"0"}></iframe>
              <div style={{"dispaly": "none", "position": "absolute", "width": "80%", "bottom": "10px", "left": "0", "right": "0", "marginLeft": "auto", "marginRight": "auto", "color": "#000", "textAlign": "center"}}>
                <small style={{"lineHeight": "1.8", "fontSize": "2px", "background": "#fff"}}>
                  Powered by
                  <a href={"http://www.googlemapsgenerator.com/ja/"}>
                    googlemapsgen (ja)
                  </a>
                  &amp;
                  <a href={"https://opwaarderenlebara.nl/netwerkbereik-lebara-nl/"}>
                    https://opwaarderenlebara.nl/netwerkbereik-lebara-nl/
                  </a>
                </small>
              </div>
              <style dangerouslySetInnerHTML={{__html: "\n              #gmap_canvas img {\n                max-width: none !important;\n                background: none !important\n              }\n            "}} />
            </div>
          </div>
          <div className={"col-md-6"}>
            <div className={"form new-contect-form"}>
              <div id={"sendmessage"}>
                Your message has been sent. Thank you!
              </div>
              <div id={"errormessage"}></div>
              <form action={"/send-email"} method={"post"} role={"form"} className={"contactForm"}>
                <div className={"form-group"}>
                  <input type={"text"} name={"name"} className={"form-control"} id={"name"} placeholder={"Your Name"} data-rule={"minlen:4"} data-msg={"Please enter at least 4 chars"} />
                  <div className={"validation"}></div>
                </div>
                <div className={"form-group"}>
                  <input type={"email"} className={"form-control"} name={"email"} id={"email"} placeholder={"Your Email"} data-rule={"email"} data-msg={"Please enter a valid email"} />
                  <div className={"validation"}></div>
                </div>
                <div className={"form-group"}>
                  <input type={"text"} className={"form-control"} name={"subject"} id={"subject"} placeholder={"Subject"} data-rule={"minlen:4"} data-msg={"Please enter at least 8 chars of subject"} />
                  <div className={"validation"}></div>
                </div>
                <div className={"form-group"}>
                  <textarea className={"form-control"} name={"message"} rows={"5"} data-rule={"required"} data-msg={"Please write something for us"} placeholder={"Message"}></textarea>
                  <div className={"validation"}></div>
                </div>
                <div className={"text-center"}>
                  <button type={"submit"} className={"btn-primary"}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={"contact-url-box-outer"}>
          <div className={"row"}>
            <div className={"col-md-4"}>
              <div className={"contact-url-box info"}>
                <i className={"fa fa-map-marker"}></i>
                <p>
                  219, Virtual Coworks, 4th Floor
                  <br />
                  Mangal City Mall, Indore
                </p>
              </div>
            </div>
            <div className={"col-md-4"}>
              <div className={"contact-url-box info"}>
                <i className={"fa fa-envelope"}></i>
                <p>
                  contact@jellygit.com
                  <br />
                  hr@jellygit.com
                </p>
              </div>
            </div>
            <div className={"col-md-4"}>
              <div className={"contact-url-box info"}>
                <i className={"fa fa-phone"}></i>
                <p style={{"paddingTop": "13px"}}>
                  +91-9131652322
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
