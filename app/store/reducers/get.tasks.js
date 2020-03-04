import { GET_TASKS } from '../actionTypes';

export default function (state = [], action) {
    const { type, data } = action;
    switch (type) {
        case GET_TASKS:
            console.log('data', data);
            return data.tasks;
        default:
            return state
    }
}