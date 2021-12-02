import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    post: [],
}

function PostList(props) {
    const { posts } = props;
    
    return (
        <ul className="post-list">
            {posts.map(post =>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;