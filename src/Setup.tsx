import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {CounterType, setMaxValueAC, setMaxValueActionType, setStartValueAC, setupAC, setStartValueActionType} from "./state/counter-reducer";

type SetupType = {}

export function Setup(props: SetupType) {
    let counter = useSelector<AppRootStateType, CounterType>(state => state.counter)
    let dispatch = useDispatch()


    const onChangeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(e.currentTarget.valueAsNumber))

    }
    const onChangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(e.currentTarget.valueAsNumber))


    }

    let setup=()=>{

        dispatch(setupAC(counter.startValue,counter.maxValue))

    }

    return (
        <div >



            <div>
                <span className={"span"}>Start Value</span> <input className={counter.startValue<0||counter.startValue===counter.maxValue||counter.startValue>counter.maxValue?"spanError":"atuin-btn"} value={counter.startValue} type="number" onChange={onChangeHandler1}/> <br/>
                <span className={"span2"}>Max Value</span> <input className={counter.startValue<0||counter.startValue===counter.maxValue||counter.startValue>counter.maxValue?"spanError":"atuin-btn"} value={counter.maxValue}  type="number" onChange={onChangeHandler2}/>
            </div>
            <div>
                <button className={counter.count<counter.maxValue+1||counter.maxValue<counter.startValue||counter.startValue===counter.count|| counter.startValue<0||counter.startValue===counter.maxValue?"button2-disable":"setupButton"} onClick={setup} disabled={counter.count<counter.maxValue+1||counter.startValue===counter.count|| counter.startValue<0||counter.startValue===counter.maxValue||counter.startValue>counter.maxValue} >set</button>

            </div>

        </div>


    )
}