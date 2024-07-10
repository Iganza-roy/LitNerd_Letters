// This file handles user authentication logic (registration, login, and logout).

import { db } from "../dbm.js";
import bcrypt from "bcryptjs"; // for password hashing
import jwt from "jsonwebtoken"; // for tocken generation

// funciton to register a new user
export const register = (req, res) => {
  // check if user exists
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("user already exists"); // conflict status code

    //password encryption & user creation

    const salt = bcrypt.genSaltSync(10); // generating a salt for hashing
    const hash = bcrypt.hashSync(req.body.password, salt); // hashing the password

    const q = "INSERT INTO users(`username`, `email`, `password`) VALUES(?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User successfully created!");
    });
  });
};

// function to handle user login

export const login = (req, res) => {
  // check if user exists

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("Invalid username");

    // password verification
    const pass = bcrypt.compareSync(req.body.password, data[0].password);
    if (!pass) return res.status(400).json("Invalid username or password");

    // generate jwt tocken
    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    //send tocken as cookie with HttpOnly flag for security

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other); // Send user data (excluding password) and success message
  });
};

// function to handle user logout

export const logout = (req, res) => {
  // Clear the access token cookie with secure and SameSite=None options
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("Successfully signed out!");
};
