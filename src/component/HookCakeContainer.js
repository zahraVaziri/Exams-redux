import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';
import "./PostSaga.css";
const HookCakeContainer = () => {
    const [number,setNumber]= useState(0)
    const numOfCake = useSelector((state)=> state.cake.numOfCake)
    const dispatch = useDispatch()
  return (

<div className="container">
      <div>
        <h2>تعداد کیک ها - {numOfCake} </h2>
        <input
          type={"text"}
          
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="button-29" onClick={() => dispatch(buyCake(number))}>
        خرید کیک {number}
      </button>
      </div>
</div>

  );
}

export default HookCakeContainer
