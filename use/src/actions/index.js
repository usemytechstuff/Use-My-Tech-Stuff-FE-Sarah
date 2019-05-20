import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export const login = creds => dispatch => {
    dispatch ({type:LOGIN_START});
    return axios.post('https://usemytechstuffapp.herokuapp.com/api/login', creds).then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload})
    })
    
}

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const signUp = user => dispatch => {
    dispatch ({type: SIGN_UP_START});
    return axios.post('https://usemytechstuffapp.herokuapp.com/api/register', user). then(res => {
        
        dispatch({type: SIGN_UP_SUCCESS, payload: res.data.payload})

    })
}

export function logout() {
    localStorage.removeItem('user');
}