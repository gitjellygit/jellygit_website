import React from 'react';
import InlineScript from '../components/InlineScript.jsx';

export default function ProductsPage() {
  return (
    <>
  <style dangerouslySetInnerHTML={{__html: "\n\t.erp-img {\n\t\tmargin-left: auto;\n\t\tmargin-right: 15px;\n\t\t/* Adjust the margin as needed */\n\t}\n\n\t/* Reduce margin between input fields */\n\t.form-group:not(:last-child) {\n\t\tmargin-bottom: 5px;\n\t}\n"}} />
  <div className={"header-bannner"}>
    <div className={"container"}>
      <h2>
        JellyGit ERP
      </h2>
    </div>
    <div className={"clearfix"}></div>
  </div>
  <main id={"main"}>
    <section id={"features"}>
      <div className={"container"}>
        <img src={"img/products/jewelerp.png"} id={"jewelerp"} className={"img-fluid"} alt={""} />
        <h2 id={"erp-heading"}>
          Welcome to JellyGit ERP
        </h2>
        <p className={"text-center top_paragraph"}>
          Jellygit ERP eliminates the need for multiple software
				applications by offering a complete package that covers all aspects of your jewelry business. Say
				goodbye to data inconsistencies and access issues with our stable technologies and robust database,
				allowing uninterrupted access for over 200 concurrent users while ensuring data integrity.
        </p>
      </div>
    </section>
    <section id={"wireframe"} style={{"fontFamily": "'Poppins', sans-serif"}}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-6"} id={"security-text"}>
            <h2>
              Security and Inventory
            </h2>
            <p>
              With RFID integration, Jellygit ERP takes security and inventory control to new heights.
						Rest assured knowing that your precious inventory is being safeguarded like never before.
            </p>
          </div>
          <div className={"col-md-6 col-sm-6"}>
            <div className={"product-item-img"}>
              <img src={"img/products/rfid.png"} className={"image-responsive "} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id={"uidesign"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-6 col-sm-6"}>
            <div className={"product-item-img-gray img-fluid"}>
              <img className={"image-responsive"} src={"img/products/erp-img.png"} alt={""} />
            </div>
          </div>
          <div className={"col-md-6 col-sm-6"}>
            <h2>
              Benefits of Jewelry ERP
            </h2>
            <p>
              A Jewelry ERP (Enterprise Resource Planning) system is highly beneficial for a jewelry business
						due to its ability to centralize and streamline various aspects of operations. Here are some of
						the reasons why a Jewelry ERP is advantageous
            </p>
            <ul>
              <li>
                Accurate Pricing
              </li>
              <li>
                Supply Chain Optimization
              </li>
              <li>
                Quality Assurance
              </li>
              <li>
                Scalability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className={"case-study-wrapper imgs"}>
      <div className={"case-study  pb"} style={{"position": "relative", "top": "0px", "left": "0px"}}>
        <div className={"casestudy-block clearfix"}>
          <div className={"container"}>
            <h2 className={"text-center"} style={{"color": "#eee292"}}>
              Comprehensive Inventory Management
            </h2>
            <div className={"row"} style={{"textAlign": "center"}}>
              <div className={"col-md-4"}>
                <h3 style={{"color": "#eee292"}}>
                  Product Information Management (PIM)
                </h3>
                <p style={{"color": "#fff"}}>
                  Store detailed information about each jewelry piece, including images,
								descriptions, materials, weights, and pricing.
								Implement an easy-to-use interface for adding new products and updating existing ones.
                </p>
              </div>
              <div className={"col-md-4"}>
                <h3 style={{"color": "#eee292"}}>
                  Order Processing
                </h3>
                <p style={{"color": "#fff"}}>
                  Streamline the order placement process with a user-friendly
								interface.
								Support multiple payment gateways and secure payment processing.
								Manage order status, shipping, and delivery tracking..
                </p>
              </div>
              <div className={"col-md-4"}>
                <h3 style={{"color": "#eee292"}}>
                  Customer Relationship Management (CRM)
                </h3>
                <p style={{"color": "#fff", "textAlign": "center"}}>
                  Store customer profiles, purchase history, and
								contact information.
								Implement personalized marketing and communication strategies.
								Enable customer reviews and ratings for products.
                </p>
              </div>
            </div>
          </div>
          <div className={"rotate-logo"} id={"leftgear"}></div>
          <div className={"radius-rotate"}></div>
        </div>
        <div className={"parallax-img parallax"} style={{"transform": "rotate(7.5deg)"}}></div>
      </div>
    </section>
    <section id={"our-offer"}>
      <div className={"container carousel-section"}>
        <div className={"row"}>
          <div className={"col-md-2"}>
            <div id={"carouselExampleIndicators"} className={"carousel slide"} data-ride={"carousel"} data-pause={"false"} data-interval={"3000"}>
              <div className={"carousel-inner"} style={{"width": "80%", "marginTop": "100px"}}>
                <div className={"carousel-item active"}>
                  <h3 style={{"color": "#000"}}>
                    DEFINE TRANSACTIONS RELATING TO STYLE
									INVENTORY EASILY
                  </h3>
                  <p>
                    Optimize style and casting inventory management with integrated
									ERP software for automatic forecasting and material planning.
									Create and maintain entries of receipt, issue, transfer, and
									physical inventory to keep updated in real-time.
                  </p>
                </div>
                <div className={"carousel-item"}>
                  <h3 style={{"color": "#000"}}>
                    REPORTS
                  </h3>
                  <p>
                    Different reports can be viewed on this screen — issue
									report, transfer report, activity report, stock report,
									item price list, item cost variance report, etc. that can
									be customized according to customers’ needs. Make
									smarter, confident decisions with interactive reports
									made available on your screen anytime
                  </p>
                </div>
                <div className={"carousel-item"}>
                  <h3 style={{"color": "#000"}}>
                    SETUP
                  </h3>
                  <p>
                    Define item categories, item types, and locations on this screen.
									Record transactions relating to style inventory such as receipts,
									issue, transfer, and physical inventory, production transfer, and
									monthly posting with comprehensive details.
                  </p>
                </div>
              </div>
              <a className={"carousel-control-prev"} href={"#carouselExampleIndicators"} role={"button"} data-slide={"prev"}>
                <span className={"carousel-control-prev-icon"} aria-hidden={"true"}></span>
                <span className={"sr-only"}>
                  Previous
                </span>
              </a>
              <a className={"carousel-control-next"} href={"#carouselExampleIndicators"} role={"button"} data-slide={"next"}>
                <span className={"carousel-control-next-icon"} aria-hidden={"true"}></span>
                <span className={"sr-only"}>
                  Next
                </span>
              </a>
            </div>
          </div>
          <div className={"col-md-4 offset-md-4"} id={"carousel-img"}>
            <div id={"carouselExampleSlidesOnly"} className={"carousel slide"} data-ride={"carousel"} data-pause={"false"} data-interval={"3000"}>
              <div className={"carousel-inner"}>
                <div className={"carousel-item active"}>
                  <img className={"d-block w-100 img-fluid"} src={"img/products/transaction.png"} alt={"First slide"} />
                </div>
                <div className={"carousel-item"}>
                  <img className={"d-block w-100 img-fluid"} src={"img/products/reports.png"} alt={"Second slide"} />
                </div>
                <div className={"carousel-item"}>
                  <img className={"d-block w-100 img-fluid"} src={"img/products/setup.png"} alt={"Third slide"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-sm-12 my-auto"} style={{"display": "flex", "alignItem": "center", "justifyContent": "center"}}>
            <video autoplay loop width={"800"} height={"600"} id={"demo-vid"}>
              <source src={"img/products/JellyGitERP-1.mp4"} type={"video/mp4"} />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
    <div className={"container mt-4 mb-4"}>
      <div className={"card pl-2 pr-2"} style={{"backgroundColor": "#1a1a1a", "borderRadius": "12px"}}>
        <div className={"card-body"}>
          <div className={"row"}>
            <div className={"col-md-4"} style={{"color": "#fff", "marginTop": "50px"}}>
              <h2 className={"card-title pb-1"}>
                Do you want to witness JellyGit ERP in action?
              </h2>
              <p className={"pb-4"}>
                Interested in experiencing the power of JellyGit ERP firsthand? Simply
							send us an email
							to request a Demo
              </p>
              <hr />
              <InlineScript code={"\n(function () {\n  var q = new URLSearchParams(window.location.search);\n  var msg = \"\";\n  if (q.has(\"error\")) {\n    msg = '<div class=\"alert alert-danger\"> Please Fill in the Blanks </div>';\n  } else if (q.has(\"success\")) {\n    msg = '<div class=\"alert alert-success\"> Your Message Has Been Sent </div>';\n  }\n  if (msg) {\n    var slot = document.currentScript.previousElementSibling;\n    if (slot) slot.insertAdjacentHTML(\"afterend\", msg);\n  }\n})();\n"} />
              <form action={"/send-email"} method={"post"}>
                <input type={"text"} name={"UName"} placeholder={"User Name"} className={"form-control mb-2"} />
                <input type={"email"} name={"Email"} placeholder={"Email"} className={"form-control mb-2"} />
                <input type={"text"} name={"Contact"} placeholder={"Contact Number"} className={"form-control mb-2"} />
                <textarea name={"msg"} className={"form-control mb-2"} placeholder={"Message"}></textarea>
                <button className={"btn btn-primary btn-block mt-4"} name={"btn-send"}>
                  Submit
                </button>
              </form>
            </div>
            <div className={"col-md-8"}>
              <div className={"erp-img"} style={{"width": "100%", "maxWidth": "1000px", "height": "auto"}}>
                <img className={"img-fluid"} src={"img/products/demoimg.png"} alt={""} id={"demo-img"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    </>
  );
}
