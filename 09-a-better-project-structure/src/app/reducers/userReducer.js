export default (state = {
    name: 'Ken',
    age: 20
}, action) => {
    let initialStateResult = state.result;

    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: action.payload
            };

            break;
        case 'SET_AGE':
            state = {
                ...state,
                age: action.payload
            };

            break;
    }

    return state;
};
