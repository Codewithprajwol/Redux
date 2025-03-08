import {createStore} from 'redux'
let initialState={
    post:0,
    love:'radhaKrishna',
    goal:'developer', 
}
const INCREASE='post/increase'
const DECREASE='post/decrease'
const INCREASEBY='post/increaseBy'
const DECREASEBY='post/decreaseBy'

function reducer(state=initialState,action){
//     if(action.type===INCREASE){
//     return {...state, post:state.post+1}
//    }
//    else if(action.type==DECREASE){
//        return {...state, post:state.post-1}
//     }
//     else if(action.type==INCREASEBY){
//         return {...state, post:state.post+action.payload}
//     }
//     else if(action.type==DECREASEBY){
//         return {...state,post:state.post-action.payload}
//     }
//     else
//     return state;
    switch(action.type){
        case INCREASE:
            return {...state, post:state.post+1}
        case DECREASE:
            return {...state, post:state.post-1}
        case INCREASEBY:
            return {...state, post:state.post+action.payload}
        case DECREASEBY:
            return {...state,post:state.post-action.payload}
        default:
            return state
    }
     
}

//? createStore lay reducer function leenxa so initial state halna parxa reducer function ma ani ...state the aafai pass vayo ...and for action we have method provided by store (i.e. createStore) ...where in back dispatch call the reducer 
const store=createStore(reducer)

store.subscribe(()=>{
    
    console.log(store.getState())
})
store.dispatch({type:INCREASE})
store.dispatch({type:INCREASE})
store.dispatch({type:INCREASEBY,payload:20})
store.dispatch({type:DECREASEBY,payload:10})


// console.log(reduxState)
// reduxState=reducer(reduxState,{type:'post/increase'});
// console.log(reduxState)
// reduxState=reducer(reduxState,{type:'post/increase'});
// console.log(reduxState)
// reduxState=reducer(reduxState,{type:'post/decrease'});
// console.log(reduxState)
// reduxState=reducer(reduxState,{type:'post/increaseBy',payload:10});
// console.log(reduxState)



// let previousState=state;

// function increment(){
//     //mutating state
//     // state.count=state.count+1;// if(previousState===state .. it returns true where in below case it return false as different whole object has been passed)

//     // not mutating state
//     state={...state,count:state.count+1} // redux use this kind ....otherwise react cannot able to update the UI ...as react checks the previous state if they have changed then only react understand some changes has to be done ...as same as deep copy and shallow copy
// }
// console.log(state)
// increment()
// console.log(state)


//! what i have learnt redux provide the secure and the processed way to manage your state
//? when you give you core function to the redux (i.e. CreateStore) it provides the proper access or way to your state ...whether to get your state or to update your state