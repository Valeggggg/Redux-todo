import React from "react";
import {createStore} from "redux";


const defaultState = {
    todos : []
}

const reducer  = (state = defaultState, action) => {
    switch (action.type) {
        case "TODO ADD" :
            return {...state, todos:[...state.todos,action.payload]}
        case "TODO DONE" :
            return {}
        case "TODO DELETE" :
            return {}

        default :
            return state
    }
}

const store = createStore(reducer)

export default store