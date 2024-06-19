import {db} from "../dbm.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {

    // existing user

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

    
}

export const login = (req, res) => {
    
}

export const logout = (req, res) => {
    
}