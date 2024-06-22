import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const Write = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState('');


  const upload = async () => {
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      console.log(res.data)
    }catch(err) {
      console.log(err)
    }
  }
  const handleClick = async e => {
    e.preventDefault()
    upload()
  }

  return (
    <div className='write-article'>
      <div className='content'>
        <input type="text" placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
        <div className="write-container">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish Article</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:"none"}} type="file" id='file' onChange={e=>setFile(e.target.files[0])}/>
          <label className="img-upload" htmlFor="file">Upload Cover Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name='Category' value="science" id='science' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="Science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name='Category' value="Technology" id='Technology' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="Science">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name='Category' value="health" id='health' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="Science">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name='Category' value="lifestyle" id='lifestyle' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="Science">Lifestyle</label>
          </div>
          <div className='cat'>
             <input type="radio" name='Category' value="education" id='education' onChange={e=>setCat(e.target.value)}/>
             <label htmlFor="Science">Education</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
