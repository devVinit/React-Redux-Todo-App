const intialState = [{
    workName: 'work 1',
}, {
    workName: 'work 2',
}, {
    workName: 'work 3',
}, {
    workName: 'work 4',
}];

export default function (state = intialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            state.unshift(action.payload);
            return [...state, action.payload];
        case 'DELETE_TODO':
            state.splice(action.payload, 1);
            return [...state];
        default:
            return state;
    }
}
