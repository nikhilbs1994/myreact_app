const userReducer = (state = { isLoggedIn: false }, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'LOGIN':
            newState.isLoggedIn = true;
            break;
        case 'LOGOUT':
            newState.isLoggedIn = false;
            break;
        default:
            break;
    }
    
    return newState;
};

export default userReducer;