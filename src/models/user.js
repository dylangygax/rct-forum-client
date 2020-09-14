const REACT_APP_API_URL = /*deployed url || */"http://localhost:4000/api/v1"

export default class UserModel {
    //for showing data from one user
    static show(userID) {
        console.log('in show')
        console.log(userID)
        return fetch(`${REACT_APP_API_URL}/users/${userID}`).then(res => res.json())
    }

    //for showing data for all users
    static all() {
        return fetch(`${REACT_APP_API_URL}/users`).then(res => res.json())
    }
}