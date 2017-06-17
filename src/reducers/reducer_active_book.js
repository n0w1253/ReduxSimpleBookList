// state argument is not application state, only the state this reducer is responsible for (activebook in this case)
export default function(state = null, action){
    //do not mutate state, always return a fresh object
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload

    }


    return state
}