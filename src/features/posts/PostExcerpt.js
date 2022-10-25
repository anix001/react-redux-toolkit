import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <div className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButton post={post} />
    </article>
  );
};

export default PostExcerpt;
