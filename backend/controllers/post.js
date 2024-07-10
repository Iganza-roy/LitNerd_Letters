// managing posts

import { db } from "../dbm.js";
import jwt from "jsonwebtoken";

// fetching & filtering posts
export const getPosts = (req, res) => {
  const searchQuery = req.query.search;
  const catQuery = req.query.cat;

  let q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  if (searchQuery) {
    q += catQuery ? " AND title LIKE ?" : " WHERE title LIKE ?";
  }

  const queryParams = [];
  if (catQuery) queryParams.push(catQuery);
  if (searchQuery) queryParams.push(`%${searchQuery}%`);

  db.query(q, queryParams, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

// fetching single post by id
export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

//adding a new post
export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not Authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid!");

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(401).json("User not authenticated!");
      return res.json("Post created successfully!");
    });
  });
};

// deleting posts by id
export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not Authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err)
        return res.status(403).json("You can only delete you're own post!");

      return res.json("Post has been deleted!");
    });
  });
};

// updating posts by id
export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not Authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid!");

    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title` = ?, `desc` = ?, `img` = ?, `cat` = ? WHERE `id` = ? AND `uid` = ?";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      userInfo.id,
    ];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(401).json("User not authenticated!");
      return res.json("Post updated successfully!");
    });
  });
};
