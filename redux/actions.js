import {ADD_TODO, CHANGE_LANGUAGE, DELETE_TODO, IS_DARK_THEME} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = task => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        task
    }
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});

export const isDarkThemeTodo = value => ({
    type: IS_DARK_THEME,
    payload: {
        value
    }
});

export const changeLanguage = language => {
    return {
        type: CHANGE_LANGUAGE,
        language
    }
}


