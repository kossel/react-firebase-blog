import React from 'react';
import Entry from 'components/Entry';
// import connect from 'redux';
// import fetchPosts from 'store/post/actions';

export default function Home({ posts }) { // eslint-disable-line
  console.log(posts);
  return (
    <div>
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </div>
  );
}
//
//   const mapStateToProps = (state, ownProps) => ({
//     post: state.post,
//   });
//
//   const mapDispatchToProps = (dispatch, ownProps) => ({
//     fetchPosts: () => dispatch(fetchPosts()),
//   });
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
