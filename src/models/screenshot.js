const REACT_APP_API_URL = /*deployed url || */"http://localhost:4000/api/v1"

export default class ScreenshotModel {
    //for showing data from one screenshot
    static show(screenshotID) {
        console.log('in show')
        console.log(screenshotID)
        return fetch(`${REACT_APP_API_URL}/screenshots/${screenshotID}`).then(res => res.json())
    }

    //for showing data for all screenshots
    static all() {
        return fetch(`${REACT_APP_API_URL}/screenshots`).then(res => res.json())
    }

    //for filtering parks by some parameter.
    static filter(filterObject) {
        return fetch(`${REACT_APP_API_URL}/screenshots/filter`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filterObject)
        }).then(res => res.json())
    }
    
    //for creating a new screenshot
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/screenshots`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
    
    //to update screenshot in database. for settings page/ logging likes, matches, etc. 
    static update(screenshotID, updateObject) {
        console.log(screenshotID)
        console.log(updateObject)
        return fetch(`${REACT_APP_API_URL}/screenshots/${screenshotID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateObject)
        }).then(res => res.json())
    }

    //to delete screenshot from database
    static delete(screenshotID) {
        console.log('deletin')
        return fetch(`${REACT_APP_API_URL}/screenshots/${screenshotID}`, {
            method: "DELETE",
        }).then(res => res.json())
    }
}