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
    
    //to update user in database. for settings page/ logging likes, matches, etc. 
    static update(userID, updateObject) {
        console.log(userID)
        console.log(updateObject)
        return fetch(`${REACT_APP_API_URL}/users/${userID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateObject)
        }).then(res => res.json())
    }

    //to delete user from database
    static delete(userID) {
        return fetch(`${REACT_APP_API_URL}/users/${userID}`, {
            method: "DELETE",
        }).then(res => res.json())
    }

    //AUTH METHODS
    //for creating a new user
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    //login
    static login(credentials) {
        console.log('in login in user model')
        console.log(credentials)
        return fetch(`${REACT_APP_API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(credentials)
        }).then(res => res.json())
    }

    //logout
    static logout() {
        return fetch(`${REACT_APP_API_URL}/auth/logout`, {
            method: "DELETE",
            credentials: 'include'
        }).then(res => res.json())
    }
}