// This file contains the implementation of the home page of the site

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import search from "../images/search.png";
import axios from "axios";

// defining the home component
const Home = () => {
  const [posts, setPosts] = useState([]); // storing fetched posts
  const [searchTerm, setSearchTerm] = useState(""); // state for the search term
  const cat = useLocation().search; // // Get category from URL search params (optional)

  // Fetch posts on component mount and whenever cat changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the API endpoint URL based on the presence of cat param
        const res = await axios.get(`/posts${cat}`); // Use `/posts` if no cat param
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // Function to extract text from HTML content (optional for description)
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  // handling the search functionality
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/posts?search=${searchTerm}`);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //  truncates description of the posts to 500 chars
  const getDesc = (text, limit = 500) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };
  return (
    <div className="home">
      <div className="searchbar">
        <form action="" className="search-area" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for an article"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            {" "}
            <img src={search} alt="search" />
          </button>
        </form>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img-container">
              <div className="img">
                <img src={`../upload/${post.img}`} alt="post img" />
                <div className="overlay"></div>
              </div>
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getDesc(getText(post.desc))}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
