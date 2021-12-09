import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'

const authBaseURL = 'https://identitytoolkit.googleapis.com/v1/accounts'
const API_KEY = 'AIzaSyB30SnqLRPziGCt_ciwLXXTKAXLwtao1LE'

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const createUser = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(
            `${authBaseURL}:signUp?key=${API_KEY}`,
            {
                email: user.email,
                password: user.password,
                returnSecureToken: true
            }, config)
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro!',
                    text: err
                }))
            })
            .then(res => {
                if (res.data.localId) {
                    axios.put(`/users/${res.data.localId}.json`, {
                        name: user.name
                    })
                        .catch(err => {
                            dispatch(setMessage({
                                title: 'Erro!',
                                text: err
                            }))
                        })
                        .then(() => {
                            dispatch(login(user))
                        })
                }
            })
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    const url = `${authBaseURL}:signInWithPassword?key=${API_KEY}`

    const dados = {
        email: user.email,
        password: user.password,
        returnSecureToken: true
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return dispatch => {
        dispatch(loadingUser())

        axios.post(url, dados, config)
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro!',
                    text: err
                }))
            })
            .then(res => {
                if (res.data.localId) {
                    user.token = res.data.idToken
                    axios.get(`/users/${res.data.localId}.json`)
                        .catch(err => {
                            dispatch(setMessage({
                                title: 'Erro!',
                                text: err
                            }))
                        })
                        .then(resp => {
                            delete user.password
                            user.name = resp.data.name

                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }
            })
    }
}