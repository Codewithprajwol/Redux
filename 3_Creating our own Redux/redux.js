export function createStore(reducer){
    let state
    let listners=[]
    const store= {
        getState(){
           return state; 
        },
        dispatch(action){
           state=reducer(state,action);
           listners.forEach((listner)=>{
            listner();
           })
        },
        subscribe(listner){
            listners.push(listner)

            return function(){
                const listnerIndex=listners.findIndex((registeredListner)=>registeredListner===listner)
                listners.splice(listnerIndex,1);
            }
        }
    }

    store.dispatch({type:'@@INIT'})
    return store;

}