import { SET_ALERT} from '../types';

export const setAlert = (message: string)=> {
    return {
        type: SET_ALERT,
        payload: message
    } as const
}