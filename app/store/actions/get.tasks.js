import { GET_TASKS } from '../actionTypes';
import axios from 'axios';

export const getTasks = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/${id}`)
        console.log(data)
        dispatch({ type: GET_TASKS, data })
    } catch (e) {
        Promise.reject(e.response)
    }
}