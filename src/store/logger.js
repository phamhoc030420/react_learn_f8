import { actions } from "."


function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type)
        console.log('Prev state: ', prevState);
        const nextState = reducer(prevState, action)
        console.log('Next Prev: ', nextState);
        console.groupEnd();
        return nextState;
    }
}
export default logger;