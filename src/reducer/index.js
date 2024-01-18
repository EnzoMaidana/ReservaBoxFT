const initialState = {
    box: [],
}

export default function rootReducer (state = initialState, action){
    switch(action.type){
        case "GET_BOX":
            return{
                ...state,
                box: action.payload,
            }
        
        default: 
            return state;
    }
}