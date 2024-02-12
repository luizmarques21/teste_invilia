import { ADD_FAVORITE, ADD_HISTORY, DEL_FAVORITE } from "./action";

const initialState = {
    favoriteWords: [],
    historyWord: []
};

const wordReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE: {
            return {
                ...state,
                favoriteWords: [...state.favoriteWords, action.payload]
            }
        }
        case DEL_FAVORITE: {
            return {
                favoriteWords: [
                    ...state.favoriteWords.filter(
                        (word) => word.word != action.payload.word
                    )
                ]
            }
        }
        case ADD_HISTORY: {
            return {
                ...state,
                historyWord: [...state.historyWord, action.payload]
            }
        }
        default:
            return state;
    }
}

export default wordReducer;