import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "../redux/user/userAction";
import loading2 from './loading2.svg'
const FetchUserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { loading, error, data } = userData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUser());
  }, []);
  return (
    <div>
      <h3> تمرین 2 :redux-thunk & state Async</h3>
      {loading ? (
        <img src={loading2} alt="logo" />
      ) : error ? (
        <p>{error}</p>
      ) : (
        userData &&
        data &&
        data.length && (
          <div>
            
            <h2> لیست کاربران</h2>
            
            {data.map((u) => (
              <p key={u.id}>{u.name}</p>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default FetchUserContainer;
