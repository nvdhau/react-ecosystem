export const CREATE_TODO = 'CREATE_TODO';
export const createToDo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeToDo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});

export const MARK_AS_DONE_TODO = 'MARK_AS_DONE_TODO';
export const markAsDoneToDo = text => ({
    type: MARK_AS_DONE_TODO,
    payload: { text },
});