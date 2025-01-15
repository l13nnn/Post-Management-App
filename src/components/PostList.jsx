import React from "react";

function PostList ({posts}) {
  return (
    <div>
      {posts.map((post) => 
      <div className="post-list" key={post.id}>
         <h4>{post.title}</h4>
         <p>{post.body}</p>
      </div>
      )}
    </div>
  )
}

export default PostList;