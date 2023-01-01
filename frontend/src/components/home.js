import React from 'react'
import './Home.css';
export default function Home() {
  return (
    <div className="home">
      {/* card */}
      <div className='card'>
        {/* card header */}
        <div className='card-header'>
          <div className="card-pic">
            <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='' />
          </div>
        <h5>Ramesh</h5>
        </div>

        {/* card image */}
        <div className='card-image'>
          <img src='https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt=''/>
        </div>
        
        {/* card-content */}
        <div className='card-content'>
          <span className="material-symbols-outlined">
              favorite
          </span>
          <p>1 Like</p>
          <p>This is amazing</p>
        </div>
        {/* add comment */}
        <div className='add-comment'>
          <span className="material-symbols-outlined">
            mood
          </span>

          <input type="text" placeholder='Add a comment' />
          <button className='comment'>Post</button>

        </div>
      </div>
    </div>
  )
}
