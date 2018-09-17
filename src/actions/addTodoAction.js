export function addTodoAction(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
}