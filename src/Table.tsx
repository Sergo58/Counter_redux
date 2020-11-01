import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {CounterType} from "./state/counter-reducer";
type TableType={


}

export function Table(props:TableType) {
    let counter=useSelector<AppRootStateType,CounterType>(state =>state.counter )
    return (
        <div className={counter.count>counter.setMaxValue-1?"table-red":"table"}>
           <div>{counter.count||counter.count===0?counter.count:counter.startValue<0||counter.startValue===counter.maxValue||counter.startValue>counter.maxValue?<span className={"error"}>Incorrect value!</span>:<span className={"enter"}>inter values and press "set"</span>} </div>
        </div>
    );
}