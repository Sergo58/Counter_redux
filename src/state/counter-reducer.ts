import {ChangeEvent, useState} from "react";


export type CounterType = {
    maxValue: number
    startValue: number
    count: number
    setMaxValue: number
}


let initialState: CounterType = {
    maxValue: 10,
    startValue: 5,
    count:5  ,
    setMaxValue: 10

}
export type increaseActionType = {
    type: 'INCREASE'

}
export type resetActionType = {
    type: 'RESET'


}

export type setupActionType = {
    type: 'SETUP'
    start:number
    max:number
    count:number


}
export type setStartValueActionType = {
    type: 'SET-START-VALUE'
    start:number

}
export type setMaxValueActionType = {
    type: 'SET-MAX-VALUE'
    max:number

}

export type ActionType =
    increaseActionType
    | resetActionType
    | setupActionType
|setStartValueActionType|
    setMaxValueActionType


export const counterReducer = (state: CounterType = initialState, action: ActionType) => {


    switch (action.type) {
        case "INCREASE": {
            state.count = state.count + 1
            return {...state}
        }
        case "RESET": {
            state.count = state.startValue
            return {...state}
        }
        case "SETUP": {


            state.startValue=action.start
            state.count = state.startValue
            state.maxValue=action.max
            state.setMaxValue=state.maxValue


            return {...state}
        }
        case "SET-MAX-VALUE":{
            state.maxValue = action.max
            state.count=NaN
            return {...state}
        }
        case "SET-START-VALUE":{
            state.startValue = action.start
            state.count=NaN
            return {...state}
        }



        default:
            return state


    }

}

export const increaseAC = (): increaseActionType => {
    return {
        type: 'INCREASE'
    }
}

export const resetAC = (): resetActionType => {
    return {
        type: 'RESET'
    }
}

export const setupAC = (start:number,max:number): setupActionType => {
    return {
        type: 'SETUP',
        start:start,
        max:max,
        count:start
    }
}
export const setStartValueAC = (start:number): setStartValueActionType => {
    return {
        type: 'SET-START-VALUE',
        start:start,

    }
}
export const setMaxValueAC = (max:number): setMaxValueActionType => {
    return {
        type: "SET-MAX-VALUE",
        max:max,

    }
}










