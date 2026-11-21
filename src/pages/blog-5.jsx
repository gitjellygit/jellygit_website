import React from 'react';

export default function Blog5Page() {
  return (
    <>
  <div className={"container pt-5"}>
    <div className={"row pt-5"}>
      <div className={"col-md-8"}>
        <div className={"blog-post"}>
          <div className={"card"}>
            <img src={"img/blogImages/blog-5-img.jpg"} className={"card-img-top"} alt={"Blog Post 5"} />
            <div className={"card-body"}>
              <h2 className={"card-title"}>
                What are the key considerations in selecting, implementing, and optimizing an ERP system for business needs?
              </h2>
              <p className={"card-text text-muted"}>
                Published on: October 25, 2023
              </p>
              <p className={"card-text"}></p>
              <p className={"card-text"}>
                When you're choosing and setting up an ERP system for your business, there are a few important things to think about. First, make sure the ERP system matches what your business needs. It should be able to grow with your company, so it's important to consider how scalable it is. It's also important to check if it can work smoothly with the software you're already using, like CRM or finance tools.
                <br />
                <br />
                Of course, cost is a big deal. You need to not only think about what it costs to get started but also the ongoing expenses, like keeping the system up and running. Finally, don't forget about training and support. Your team needs to know how to use the system effectively for it to be a success.
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
