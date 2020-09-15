const REACT_APP_API_URL = /*deployed url || */"http://localhost:4000/api/v1"

export default class CommentModel {
    //for showing data from one comment
    static show(commentID) {
        console.log('in show')
        console.log(commentID)
        return fetch(`${REACT_APP_API_URL}/comments/${commentID}`).then(res => res.json())
    }

    //for showing data for all comments
    static all() {
        return fetch(`${REACT_APP_API_URL}/comments`).then(res => res.json())
    }
    
    //for filtering comments by some parameter.
    static filter(filterObject) {
        return fetch(`${REACT_APP_API_URL}/comments/filter`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filterObject)
        }).then(res => res.json())
    }

    //for creating a new comment
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
    
    //to update comment in database. for settings page/ logging likes, matches, etc. 
    static update(commentID, updateObject) {
        console.log(commentID)
        console.log(updateObject)
        return fetch(`${REACT_APP_API_URL}/comments/${commentID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateObject)
        }).then(res => res.json())
    }

    //to delete comment from database
    static delete(commentID) {
        return fetch(`${REACT_APP_API_URL}/comments/${commentID}`, {
            method: "DELETE",
        }).then(res => res.json())
    }
}