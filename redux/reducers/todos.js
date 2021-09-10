import {ADD_TODO, DELETE_TODO, IS_DARK_THEME, CHANGE_LANGUAGE} from "../actionTypes";

const initialState = {
    todo_list: [],
    is_dark_theme: false,
    language: 'vi'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const {id, task} = action.payload
            return {
                ...state,
                todo_list: [...state.todo_list, {id, task}]
            };
        }
        case DELETE_TODO: {
            const {id} = action.payload
            return {
                ...state,
                todo_list: state.todo_list.filter((todo) => todo.id !== id)
            };
        }
        case IS_DARK_THEME: {
            const {value} = action.payload
            return {
                ...state,
                is_dark_theme: value
            };
        }
        case CHANGE_LANGUAGE: {
            return {...state, language: action.language};
        }
        default:
            return state;
    }
}
