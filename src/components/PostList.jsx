import React from "react";

function PostList ({posts}) {
  return (
    <div>
      {posts.map((post, index) => 
      <div className="post-list" key={index}>
         <h4>{post.title}</h4>
         <p>{post.body}</p>
      </div>
      )}
    </div>
  )
}

export default PostList;