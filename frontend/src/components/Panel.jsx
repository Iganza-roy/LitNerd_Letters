import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Panel = ({cat}) => {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchData = async ()=> {
        try{
            const res = await axios.get(`/posts/?cat=${cat}`);
            setPosts(res.data);

        }catch(err){
            console.log(err);
        }
        };
        fetchData()
    },[cat]);
    
    return (
        <div className='panel'>
            <h1>You may also like</h1>
            {posts.map(post => (
                <div className='post' key={post.id}>
                    <img src={`../upload/${post.img}`} alt="" />
                    <h2>{post.title}</h2>
                    <Link to={`/post/${post.id}`}><button>Read more</button></Link>
                </div>
            ))}
        </div>
    );
};

export default Panel;
