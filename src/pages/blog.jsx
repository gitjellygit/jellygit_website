import React, { useEffect, useState } from 'react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [sidebar, setSidebar] = useState([]);

  useEffect(() => {
    fetch('/blog-posts.json')
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.blogPosts || []);
        setSidebar(data.sidebarContent || []);
      })
      .catch((e) => console.error('Error fetching blog posts:', e));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="pt-5 pb-5 my-blog">Blog</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          {posts.map((post, i) => (
            <div className="card mb-5" key={i}>
              <a href={post.link} target="_blank" rel="noreferrer">
                <img src={post.image} className="card-img-top img-fluid" alt={post.title} />
              </a>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text text-muted">{post.date}</p>
                <p className="card-text">{post.text}</p>
                <a href={post.link} className="btn btn-primary" target="_blank" rel="noreferrer">Read More</a>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <p id="sidebar-text">Recent Posts</p>
          {sidebar.map((item, i) => (
            <div className="card mb-5" key={i}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.image} className="card-img-top img-fluid" alt={item.title} />
              </a>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
