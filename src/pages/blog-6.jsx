import React from 'react';

export default function Blog6Page() {
  return (
    <>
  <div className={"container pt-5"}>
    <div className={"row pt-5"}>
      <div className={"col-md-8"}>
        <div className={"blog-post"}>
          <div className={"card"}>
            <img src={"img/blogImages/blog-6-img.jpg"} className={"card-img-top"} alt={"Blog Post 0"} />
            <div className={"card-body"}>
              <h2 className={"card-title"}>
                The Future of PR - Your Brand's Essential Guide
              </h2>
              <p className={"card-text text-muted"}>
                Published on: January 19, 2024
              </p>
              <p className={"card-text"}></p>
              <p className={"card-text"}>
                What's Changing?
                <br />
                PR is evolving with the times, using social media and digital platforms to redefine brand communication.
                <br />
                <br />
                Why PR? The Benefits:
                <br />
                Trust Builder: PR crafts authentic narratives, building trust in your brand.
                <br />
                Digital Spotlight: Stand out online with PR securing media coverage and leveraging social media.
                <br />
                Crisis Navigator: Navigate storms gracefully with PR's crisis management expertise.
                <br />
                Engagement Guru: PR fosters meaningful connections beyond transactions.
                <br />
                <br />
                Conclusion:
                <br />
                In the dynamic world of PR, your brand's success story awaits. Embrace change, build credibility, and engage with your audience strategically. Connect with us and let's pave the way for your brand's bright future!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"col-md-3"}>
        <div className={"sidebar pt-5"}>
          <h3>
            Recent Posts
          </h3>
          <div className={"blog-post-sidebar"}>
            <a href={"blog-6"} target={"_blank"}>
              <div className={"card"}>
                <img src={"img/blogImages/blog-6-img.jpg"} className={"card-img-top"} alt={"Blog Post 1"} />
                <div className={"card-body"}>
                  <h5 className={"card-title"}>
                    <h5 className={"card-title"}>
                      The Future of PR - Your Brand's Essential Guide
                    </h5>
                  </h5>
                  <p className={"card-text text-muted"}>
                    Published on: January 19, 2024
                  </p>
                </div>
              </div>
            </a>
            <a href={"blog-1"} target={"_blank"}>
              <div className={"card mt-3"}>
                <img src={"img/blogImages/blog-1-img.jpg"} className={"card-img-top"} alt={"Blog Post 1"} />
                <div className={"card-body"}>
                  <h5 className={"card-title"}>
                    <h5 className={"card-title"}>
                      Outsourcing Unveiled - A Simple Guide for IT Companies
                    </h5>
                  </h5>
                  <p className={"card-text text-muted"}>
                    Published on: December 12, 2023
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
