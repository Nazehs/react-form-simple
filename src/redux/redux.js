import { createStore} from 'redux'
import uuid from 'uuid/v4';

const initialState = {
    users:[
        {key:uuid(), firstname: "Nazeh", lastname: "Abel", birthday: "10/20/19", hobbies: "Skating, music", age: "30"},
    ]
}

function reducer(state, {type, users}){
    console.log(users, type, state);
    switch(type){
        case 'ADD_USER':
            console.log(state,'state');
            return(
               { ...state, users:[...state.users, users]}
            );
            default:
                    console.log(state,'state d');
                return {...state};

    }
}
export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const  addUserAction = (users)=>({
        type:'ADD_USER',
        payload:users
    });
