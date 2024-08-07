//Handling the writing/editing functionality

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

// defining the write component to handle creation/editing of a post
const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || ""); // state to handle stored description
  const [title, setTitle] = useState(state?.title || ""); // state to handle stored title
  const [file, setFile] = useState(null); // state to handle stored uploaded image
  const [cat, setCat] = useState(state?.cat || ""); // state to handle stored category

  const navigate = useNavigate();

  // handling file upload
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      console.log("Image uploaded: ", res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  // handling submission of created or edited post
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    // try fetching existing data for editing else
    try {
      // check if state object exists (testing editing an existing post)
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY.MM.DD HH:mm:ss"),
          });
      navigate("/");
      console.log("Post submitted successfully");
    } catch (err) {
      console.log("Error submitting post");
    }
  };

  return (
    <div className="write-article">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="write-container">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish Article</h1>
          <span>
            <b>Post Status: </b> (coming soon)
          </span>
          <span>
            <b>word count: </b>{" "}
            {value.split(" ").filter((word) => word !== "").length}
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="img-upload" htmlFor="file">
            Upload Cover Image
          </label>
          <div className="buttons">
            {/* <button>Save as draft</button> */}
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Choose category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "science"}
              name="Category"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "Technology"}
              name="Category"
              value="Technology"
              id="Technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Science">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "health"}
              name="Category"
              value="health"
              id="health"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Science">Health</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "lifestyle"}
              name="Category"
              value="lifestyle"
              id="lifestyle"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Science">Lifestyle</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "Fashion"}
              name="Category"
              value="Fashion"
              id="Fashion"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Science">Fashion</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
