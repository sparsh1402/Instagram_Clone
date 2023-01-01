import React from 'react'
import "./Createpost.css"

export default function Createpost() {

    const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
    };
    
  return (
      <div className='createPost'>
          <div className='post-header'>
              <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
              <button id = "post-btn">Share</button>
          </div>
          <div className='main-div'>
              <img id="output" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"/>
              <input type = 'file' accept='image/*' onChange={(event) => {loadfile(event)}}/>
          </div>

          {/* details */}

          <div className='details'>
              <div className='card-header'>
                  <div className='card-pic'>
                      <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='' />
                      
                  </div>
                  <h5>Ramesh</h5>
              </div>

            <textarea type = "text" placeholder='Write a caption....'></textarea>
          </div>
      </div>
  )
}
