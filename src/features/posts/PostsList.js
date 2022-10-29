// import { useEffect } from "react";
import { useSelector } from "react-redux";
import PostExcerpt from "./PostExcerpt";
import { selectPostByIds } from "./postsSlice";
import { useGetPostsQuery } from "./postsSlice";


const PostsList = () => {
  
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery()

  const orderedPostsIds = useSelector(selectPostByIds);


  let content;
  if (isLoading) {
    content = <p>"Loading ...."</p>;
  } else if (isSuccess) {
    content = orderedPostsIds.map(postId => <PostExcerpt key={postId} postId={postId}/>)
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
