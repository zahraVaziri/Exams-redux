import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'
import "./cssContainer.css";
const cakeContainer = (props) => {
  return (
    <div>
      <h3>تمرین 1 : global state sync & combin reducer</h3>
      <h2>تعداد کیک ها - {props.numOfCake} </h2>
      <button className="button-85" onClick={props.buyCake}>
        خرید کیک
      </button>
    </div>
  );
}



const mapStateToProps = (state)=>{
    return{
        numOfCake : state.cake.numOfCake
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: ()=> dispatch(buyCake())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(cakeContainer);