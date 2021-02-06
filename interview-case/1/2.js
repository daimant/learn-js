let someReducer = {};
let someInitialState = {};
let someAction = {};

const store = createStore (someReducer, someInitialState);
store.dispatch(someAction);
const currentState = store.getState;

const createStore = (reducer, initialState) => {
    let state = initialState;
    return {
        getState: () => state,
        dispatch: someAction => state = reducer(state, someAction),
    }
};