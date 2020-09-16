const REACT_APP_API_URL = /*deployed url || */"http://localhost:4000/api/v1"

export default class ParkModel {
    //for showing data from one park
    static show(parkID) {
        console.log('in show')
        console.log(parkID)
        return fetch(`${REACT_APP_API_URL}/parks/${parkID}`).then(res => res.json())
    }

    //for showing data for all parks
    static all() {
        return fetch(`${REACT_APP_API_URL}/parks`).then(res => res.json())
    }
    
    //for filtering parks by some parameter.
    static filter(filterObject) {
        return fetch(`${REACT_APP_API_URL}/parks/filter`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filterObject)
        }).then(res => res.json())
    }

    //for creating a new park
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/parks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
    
    //to update park in database. for settings page/ logging likes, matches, etc. 
    static update(parkID, updateObject) {
        console.log(parkID)
        console.log(updateObject)
        return fetch(`${REACT_APP_API_URL}/parks/${parkID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateObject)
        }).then(res => res.json())
    }

    //to delete park from database
    static delete(parkID) {
        return fetch(`${REACT_APP_API_URL}/parks/${parkID}`, {
            method: "DELETE",
        }).then(res => res.json())
    }
}