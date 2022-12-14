import React from "react";
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

let PostExcerpt = ({ postId }) => {

  const post = useSelector(state => selectPostById(state, postId))
  return (
    <article>
      <p>{post.id}</p>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <div className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButton post={post} />
    </article>
  );
};

PostExcerpt = React.memo(PostExcerpt)

export default PostExcerpt;
