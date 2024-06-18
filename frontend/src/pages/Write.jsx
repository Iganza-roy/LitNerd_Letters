import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className='write-article'>
      <div className='content'>
        <input type="text" placeholder='Title'/>
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
          <input style={{display:"none"}} type="file" id='file' />
          <label className="img-upload" htmlFor="file">Upload Cover Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name='Category' value="science" id='science' />
            <label htmlFor="Science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name='Category' value="Technology" id='Technology' />
            <label htmlFor="Science">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name='Category' value="health" id='health' />
            <label htmlFor="Science">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name='Category' value="lifestyle" id='lifestyle' />
            <label htmlFor="Science">Lifestyle</label>
          </div>
          <div className='cat'>
             <input type="radio" name='Category' value="education" id='education' />
             <label htmlFor="Science">Education</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
