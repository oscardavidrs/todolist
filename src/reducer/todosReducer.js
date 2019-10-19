
export default (state[], { type, payload }) => {
    switch (type) {
        case "add-todo":
            return {...state, payoad};
        case "remove-todo":
            return state.filter(todo => todo.id !== payload.id);
        default:
            return state;
    }
};