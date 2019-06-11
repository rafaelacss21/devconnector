import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
 const [text, setText] = useState('');
 const [displayCommentBox, toggleCommentBox] = useState(false);

 return (
  <Fragment>
   <div className='my-2'>
    <button
     onClick={() => toggleCommentBox(!displayCommentBox)}
     type='button' className='btn btn-primary'>
     Leave a comment</button>
   </div>
   {displayCommentBox && (
    <Fragment>
     <div className='post-form'>
      <form
       className='form my-1'
       onSubmit={e => {
        e.preventDefault();
        addComment(postId, { text });
        setText('');
       }}
      >
       <textarea
        name='text'
        cols='30'
        rows='5'
        placeholder='Leave a comment'
        value={text}
        onChange={e => setText(e.target.value)}
        required
       />
       <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
     </div>
    </Fragment>
   )}
  </Fragment>
 );
};

CommentForm.propTypes = {
 addComment: PropTypes.func.isRequired
};

export default connect(
 null,
 { addComment }
)(CommentForm);