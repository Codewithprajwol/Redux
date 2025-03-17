import {createStore} from './redux.js'

const initialState={
    love:0,
    name:'Yamuna',
    lover:'Prajwol'
}

const INCREASE='love/increase';
const DECREASE='love/decrease';
const INCREASEBY='love/increaseby';
const DECREASEBY='love/decreaseby';

function reducer(state=initialState,action){
    switch(action.type){
        case INCREASE:
           return {...state,love:state.love+1}
        case DECREASE:
            return {...state,love:state.love-1}
        case INCREASEBY:
            return {...state,love:state.love+action.payload}
        case DECREASEBY:
            return {...state,love:state.love-action.payload}
        default:
            return initialState;
    }
}

const store=createStore(reducer)

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})
const unsubscribe2=store.subscribe(()=>{
    console.log('hello boy');
})
store.dispatch({type:INCREASE});
store.dispatch({type:DECREASE});
store.dispatch({type:INCREASEBY, payload:10});
store.dispatch({type:DECREASEBY,payload:2});


