import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [displayPostBox, togglePostBox] = useState(false);

  return (
    <Fragment>
      <div className='my-2'>
        <button
          onClick={() => togglePostBox(!displayPostBox)}
          type='button' className='btn-large btn-primary'>
          Create a post</button>
      </div>
      {displayPostBox && (
        <Fragment>
          <div className='post-form'>
            <form
              className='form my-1'
              onSubmit={e => {
                e.preventDefault();
                addPost({ text });
                setText('');
              }}>
              <textarea
                name='text'
                cols='100'
                rows='5'
                placeholder='Create a post'
                value={text}
                onChange={e => setText(e.target.value)}
                required />
              <input type='submit' className='btn btn-dark my-1' value='Submit' />
            </form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);