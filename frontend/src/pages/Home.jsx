import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import search from '../images/search.png';
import axios from 'axios';

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async ()=> {
      try{
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);

      }catch(err){
        console.log(err);
      }
    };
    fetchData()
  },[cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className='searchbar'>
        <form action="" className='search-area'>
          <input type="text" placeholder='Search for an article'/>
          <button type='submit'> <img src={search} alt="search" /></button>
        </form>
      </div>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              {/* <div className="overlay"></div> */}
              <img src={`../upload/${post.img}`} alt="post" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{getText(post.desc)}</p>
                <Link className='link' to={`/post/${post.id}`}><button>Read More</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Home;
