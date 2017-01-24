export default (state = {
    result: 1,
    lastValues: []
}, action) => {
    let initialStateResult = state.result;

    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [
                    initialStateResult, ...state.lastValues
                ]
            };

            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [
                    initialStateResult, ...state.lastValues
                ]
            };

            break;
    }

    return state;
};
