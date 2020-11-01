import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {CounterType, increaseAC, resetAC} from "./state/counter-reducer";
type ButtonsType={

}


export function Buttons(props:ButtonsType) {
    let counter=useSelector<AppRootStateType,CounterType>(state =>state.counter )
    let dispatch=useDispatch()
    let increase = () => {
        dispatch(increaseAC())
    }
    let reset = () => {
        dispatch(resetAC())
    }
    return (<div className={"buttons"}>
            <button onClick={increase}
                    className={counter.count>counter.maxValue-1||isNaN(counter.count)?"button2-disable":"button1"}
                    disabled={counter.count>counter.maxValue-1||isNaN(counter.count)}  >inc</button>
            <button  onClick={reset} className={counter.count<=counter.startValue||isNaN(counter.count)?"button2-disable":"button2"}
                     disabled={counter.count<=counter.startValue||isNaN(counter.count)} >reset</button>
        </div>


    )
}