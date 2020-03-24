const INITIAL_STATE = {
    posts : []
}

const postsReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
       case 'FETCH':
            return {
                ...state,
                posts: action.payload
            }
    default:
       return state        
    }
}

export default postsReducer