const fetchPosts = {
  type: 'FETCH_POSTS'
};

function fetchPostsSuccess(posts) {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    data: posts
  }
}

export default {
  fetchPosts,
  fetchPostsSuccess,
};
