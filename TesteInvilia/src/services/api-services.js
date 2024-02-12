import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
    timeout: 20000
});

export const getApiWord = (word) => {
    return axiosInstance.get(`/${word}`);
}