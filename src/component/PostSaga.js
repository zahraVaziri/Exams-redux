import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/Post/PostAction";
import './PostSaga.css'
import loadings from './loading.svg'
const PostSaga = () => {
  const [postId, setPostId] = useState("");
  const { loading, error, data } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div>
        <h1>redux-saga middleware</h1>
        <input
          type={"text"}
          value={postId}
          placeholder={"id"}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button
          className="button-29"
          onClick={() => dispatch(fetchPostRequest(postId))}
        >
          دریافت پست
        </button>
      </div>

      <div>
        {loading ? (
          <img src={loadings} alt="logo" />
        ) : error ? (
          <p>{error}</p>
        ) : data.title ? (
          <div>
            <p>  عنوان پست: {data.title}</p>
            <p>  متن پست : {data.body}</p>
          </div>
        ) : (
          <p>چند پست را بیاور</p>
        )}
      </div>
    </div>
  );
};

export default PostSaga;
