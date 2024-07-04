// Handling display of a single post
import React, { useContext, useEffect, useState } from 'react';
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import Panel from '../components/Panel';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';
import DOMPurify from 'dompurify';

const Single = () => {

  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2]; // extracting the postId

  const {currentUser} = useContext(AuthContext); // for checking logged in user info

  // fetching post data
  useEffect(() => {
    const fetchData = async ()=> {
      try{
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);

      }catch(err){
        console.log(err);
      }
    };
    fetchData()
  },[postId]);

  // handling delete functionality
  const handleDelete = async () => {
      try{
        await axios.delete(`/posts/${postId}`);
        navigate("/");
      }catch(err){
        console.log(err);
      }
    }

  return (
    <div className='single'>
      <div className="content">
        <img src={`../upload/${post.img}`} alt="logo" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser && currentUser.username === post.username && (<div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <img src= {Edit} alt="edit" />
            </Link>
            <img onClick={handleDelete} src= {Delete} alt="delete" />
          </div>)}
        </div>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.desc),}}></p>
      </div>
      <Panel cat={post.cat}/>
    </div>
  )
}

export default Single
