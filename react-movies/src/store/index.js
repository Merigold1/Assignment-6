import { createStore } from 'redux'


const initialState = {
    movies: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INSERT_MOVIES':
            const movies = [...action.movies]
            return {...state, movies: movies,}
        default:
            return state 
    }
}

const store = createStore(reducer)

export default store