import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div className="comment-box">
        <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
          <h4 className="title">Add a comment</h4>
          <textarea
            className="comment-box-text"
            value={this.state.comment}
            onChange={this.handleChange.bind(this)} />
          <div>
            <button className="comment-button" action="submit">Submit comment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
