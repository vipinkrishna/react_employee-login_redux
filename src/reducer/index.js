import * as actions from './actions'

//INITIAL STATE
const initialState = {
    originalUsername: "vipinkrishna",
    originalPassword: "vipinkrishna",
    username: "",
    password: "",
    loggedIn: false,
    error: null,
    users: [
        {id: 1, name: "aaa", age: 91, email: "aaa@aaa.com", phone: "9749370001"},
        {id: 2, name: "bbb", age: 92, email: "bbb@bbb.com", phone: "9749370002"},
        {id: 3, name: "ccc", age: 93, email: "ccc@ccc.com", phone: "9749370003"},
        {id: 4, name: "ddd", age: 94, email: "ddd@ddd.com", phone: "9749370004"},
        {id: 5, name: "eee", age: 95, email: "eee@eee.com", phone: "9749370005"}
    ]
}


//REDUCER
export default function (state=initialState, {type, payload}) {
    const newState = {...state}
    switch(type) {
        case actions.SET_STATE:
            return {...state, ...payload}
        default:
            return newState
    }
}