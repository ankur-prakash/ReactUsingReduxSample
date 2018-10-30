export default (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case 'selected_library':
        return action.payload
        default:
        return state;
    }
    return state;
}