import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIce } from "../redux/icecream/iceAction";
import './cssContainer.css'
const IcecreamContainer = () => {
  const numOfIce = useSelector((state) => state.ice.numOfIce);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>تعداد بستنی ها - {numOfIce} </h2>
      <button className="button-85" onClick={() => dispatch(buyIce())}>
        خرید بستنی
      </button>
    </div>
  );
};

export default IcecreamContainer;
