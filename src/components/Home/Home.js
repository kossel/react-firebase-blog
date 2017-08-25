import React from 'react';
import Entry from 'components/Entry';
import connect from 'redux';
import fetchPosts from 'store/post/actions';

function Home({posts}){
  console.log(posts);
  return (
    <div>
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </div>
  )

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
