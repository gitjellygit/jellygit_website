import React from 'react';

export default function Blog3Page() {
  return (
    <>
  <div className={"container pt-5"}>
    <div className={"row pt-5"}>
      <div className={"col-md-8"}>
        <div className={"blog-post"}>
          <div className={"card"}>
            <img src={"img/blogImages/blog-3-img.jpg"} className={"card-img-top"} alt={"Blog Post 2"} />
            <div className={"card-body"}>
              <h2 className={"card-title"}>
                How is AI revolutionizing industries, and what ethical considerations are involved in its widespread adoption?
              </h2>
              <p className={"card-text text-muted"}>
                Published on: October 25, 2023
              </p>
              <p className={"card-text"}></p>
              <p className={"card-text"}>
                AI is really changing the game across the board. In healthcare, it's helping doctors with diagnoses and predictions and even assisting in personalized medicine. Smart cities are becoming smarter thanks to AI, making traffic flow better and even paving the way for self-driving cars. The financial industry is loving AI too, using it for fraud detection, smarter trading, and even chatbots for customer service. Education gets a boost with AI by personalizing learning experiences and handling some of the more mundane tasks for teachers. And in the entertainment world, AI helps us find the content we love and can even create music, art, and stories. However, it's not all sunshine and rainbows. We've got to keep an eye on things like privacy, bias, and job displacement. That's where regulations and responsible development come into play to make sure AI benefits everyone.
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
