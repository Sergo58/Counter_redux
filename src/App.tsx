import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Setup} from "./Setup";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "./state/store";
import {CounterType, increaseAC, resetAC, setMaxValueAC, setStartValueAC, setupAC} from "./state/counter-reducer";



function App() {

    let counter=useSelector<AppRootStateType,CounterType>(state =>state.counter )
    let dispatch = useDispatch()
    useEffect(() => {
        const max=localStorage.getItem("maxValue")||[]
        const start=localStorage.getItem("startValue")||[]

        if (typeof max === "string"&& typeof start === "string") {
                dispatch(setupAC(JSON.parse(start),JSON.parse(max)))
            }
    },[]);
    useEffect(() => {
        localStorage.setItem("maxValue",JSON.stringify(counter.maxValue))
        localStorage.setItem("startValue",JSON.stringify(counter.startValue))


    },[counter.maxValue,counter.startValue]);













    return (
        <div className="App">
           <Counter



           />

           <Setup

           />
        </div>
    );
}

export default App;
