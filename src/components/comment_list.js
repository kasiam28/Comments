import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
  if (list.length == 0)
    return (
      <div />
    );
  return (
    <div className="comment-list-box">
      <ul className="comment-list comment-list-items">{list}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
