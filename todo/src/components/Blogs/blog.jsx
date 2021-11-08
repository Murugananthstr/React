// import db from "../../config/firebaseConfig";
import React, { useState, useEffect } from "react";
import firebase from "../../config/firebaseConfig";

const db = firebase.firestore();

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const stylerCorners3 = {
    background: "gold",
    borderRadius: 25,
    backgroundPosition: "left top",
    padding: 20,
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = db.collection("Blogs");
    const data = await response.get();
    data.docs.forEach((item) => {
      setBlogs([...blogs, item.data()]);
    });
  };

  return (
    <div className="App">
      <div style={stylerCorners3}>
        {blogs &&
          blogs.map((blog) => {
            return (
              <div className="blog-container">
                <h4>{blog.title}</h4>
                <p>{blog.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
