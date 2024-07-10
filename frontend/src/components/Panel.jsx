// This file contains the implenentation of the panel/menu items displayed in the single post page
// displays posts in the same category with the one selected

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// defining the panel component
const Panel = ({ cat }) => {
  const [posts, setPosts] = useState([]); // state to store fetched posts

  // useEffect hook for fetching posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`); // Fetch posts based on the provided category (cat prop)
        setPosts(res.data); // Update the posts state with the fetched data (likely an array of posts)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="panel">
      <h1>You may also like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <Link to={`/post/${post.id}`}>
            <button>Read more</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Panel;
