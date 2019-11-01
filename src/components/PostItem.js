import React from 'react';

function postItem({ post }) {
  return (
    <li>
      <div class="post">
        <div class="profile">
          <img src={post.author.avatar} alt="Avatar" />
          <div class="info">
            <h1>{post.author.name}</h1>
            <span>{post.date}</span>
          </div>
        </div>
        <span class="post-text">{post.content}</span>
        {post.comments.map(comment =>
          <div class="comment">
            <img src={comment.author.avatar} alt="Avatar" />
            <span><b>{comment.author.name}</b> {comment.content}</span>
          </div>
        )}
      </div>
    </li>
  )
}

export default postItem;