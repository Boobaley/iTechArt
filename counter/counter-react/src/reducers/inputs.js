const inputs = (state = '', action) => {
    switch(action.type) {
        case 'CHANGE_EMAIL': 
            return [
                state, {
                    text: action.text
                }
            ];
            default:
                return state;
    }
}

export default inputs; 