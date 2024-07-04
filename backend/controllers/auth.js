// handling authentication logic

import {db} from "../dbm.js";
    import bcrypt from "bcryptjs";
    import jwt from "jsonwebtoken";

    export const register = (req, res) => {

        // check if user exists

        const q = "SELECT * FROM users WHERE email = ? OR username = ?"
        
        db.query(q, [req.body.email, req.body.username], (err, data) => {
            if (err) return res.json(err);
            if(data.length) return res.status(409).json("user already exists");


        //password encryption & user creation

        const salt = bcrypt.genSaltSync(10);
        const hash = (bcrypt.hashSync(req.body.password, salt));

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES(?)";
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User successfully created!");
        })
    });

        
    };

    // user login

    export const login = (req, res) => {
        // check if user exists

        const q = "SELECT * FROM users WHERE username = ?";

        db.query(q, [req.body.username], (err, data) => {
            if(err) return res.json(err);
            if (data.length === 0) return res.status(404).json("Invalid username")

            // password verification
            const pass = bcrypt.compareSync(req.body.password, data[0].password);
            if(!pass) return res.status(400).json("Invalid username or password")
            
            const token = jwt.sign({id:data[0].id}, "jwtkey");
            const {password, ...other} = data[0]

            //send tocken as cookie

            res.cookie("access_token", token, {
                httpOnly:true
            }).status(200).json(other)

        });
    };

    // user logout

    export const logout = (req, res) => {

        res.clearCookie("access_token", {
            sameSite:"none",
            secure:true
        }).status(200).json("Successfully signed out!")
    };