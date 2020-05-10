import React, { useState } from 'react';
import axios from 'axios';

import './CommentCreate.css';

const CommentCreate = (props) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:5000/posts/${props.id}/comments`, { content });
    } 

    return (
        <div className="CommentCreate">
            <form onSubmit={(event) => onSubmit(event)}>
                <label>
                    Comment
                </label>
                <input 
                    className="form-control"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button className="btn btn-secondary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CommentCreate;