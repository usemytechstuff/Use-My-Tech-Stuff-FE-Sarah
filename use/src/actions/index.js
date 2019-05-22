import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export const login = creds => dispatch => {
    dispatch ({type:LOGIN_START});
    return axios.post('https://usemytechstuffapp.herokuapp.com/api/login', creds).then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token})
    })
    
}

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const signUp = user => dispatch => {
    dispatch ({type: SIGN_UP_START});
    return axios.post('https://usemytechstuffapp.herokuapp.com/api/register', user).then(res => {
        console.log(res)
        dispatch({type: SIGN_UP_SUCCESS, payload: res.data})

    })
}

export const ADD_ITEM_START = 'ADD_ITEM_START';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';

export const addItem = item => dispatch => {
    dispatch ({type: ADD_ITEM_START});
    return axios.post('https://usemytechstuffapp.herokuapp.com/api/items', item).then(res => {
        console.log(res)
        dispatch ({type: ADD_ITEM_SUCCESS, payload: res.data})
    })
}

export const FETCH_ITEM_START = 'FETCH_ITEM_START';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';

export const fetchItems = item => dispatch => {
    dispatch ({type: FETCH_ITEM_START});
    return axios.get('https://usemytechstuffapp.herokuapp.com/api/items', item).then(res => {
        dispatch ({type: FETCH_ITEM_SUCCESS, payload: res.data})
    })
}

export function logout() {
    localStorage.removeItem('user');
}