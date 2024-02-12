export const ADD_FAVORITE = "ADD_FAVORITE";
export const DEL_FAVORITE = "DEL_FAVORITE";
export const ADD_HISTORY = "ADD_HISTORY";

export const addFavorite = (word) => ({
    type: ADD_FAVORITE,
    payload: word
});

export const delFavorite = (word) => ({
    type: DEL_FAVORITE,
    payload: word
});

export const addHistory = (word) => ({
    type: ADD_HISTORY,
    payload: word
})