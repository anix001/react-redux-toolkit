// import { useEffect } from "react";
import { useSelector } from "react-redux";
import PostExcerpt from "./PostExcerpt";
import {
  //selectAllPosts,
  getPostsStatus,
  getPostsError,
  selectPostByIds
  // fetchPosts,
} from "./postsSlice";


const PostsList = () => {
  // const dispatch = useDispatch();
  // const posts = useSelector(selectAllPosts);
  const orderedPostsIds = useSelector(selectPostByIds);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  

  // useEffect(() => {
  //   if (postsStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading ...."</p>;
  } else if (postsStatus === "succeeded") {
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    // content = orderedPosts.map((post, key) => (
    //   <PostExcerpt key={key} post={post} />
    // ));
    content = orderedPostsIds.map(postId => <PostExcerpt key={postId} postId={postId}/>)
  } else if (postsStatus === "failed") {
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
