const deviceReducer = (state = {data: {}}, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'UPDATE_DEVICE_COUNT':
            newState.deviceCount = action.payload;
            break;
        case 'UPDATE_DEVICE_DETAILS':
            newState.data[action.payload.deviceId] = action.payload;
            break;
        case 'UPDATE_SELECTED_DEVICE':
            newState.selectedDevice = action.payload;
            break;
        default:
            break;
    }
    
    return newState;
};

export default deviceReducer;