import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset} from "../redux/actions/counterAction";


const CounterApp = () => {

    // const x = useSelector(state=>{
    //     console.log(state.counter.count);
    //     return state.count;
    // });
    // console.log(x);

    const count = useSelector(state=>state.counter.count);

    const dispatch = useDispatch();

    function increase() {
           dispatch(increment());
    }


    return (
        <div>
                <h1>{count}</h1>
                <button onClick={increase}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
                <button
                    onClick={()=>dispatch(reset())}
                >Reset</button>
        </div>
    );
}

export default CounterApp;




// when inside counter app, when you click on button increase
 // => dispatch(increment()) => counterAction.js => increment() => action type: INCREMENT 
 // go to store => store will call reducer => reducer will return updated value to store 
 // store will return updated value to counter App 
    // counter App will re-render and show updated value