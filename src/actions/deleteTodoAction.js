export function deleteTodoAction(todo) {
    return {
        type: 'DELETE_TODO',
        payload: todo
    };
}