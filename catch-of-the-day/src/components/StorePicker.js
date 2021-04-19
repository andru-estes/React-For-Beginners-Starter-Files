import React, { Component } from 'react'
import { getFunName } from '../helpers'

class StorePicker extends Component {
    myInput = React.createRef();

    goToStore = (event) => {
        // Stop form from submitting
        event.preventDefault();

        //Get text from the input
        console.log(this)

        // Change the page to /store/input
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                { /* This is our comment */ }
                <input type="text" required placeholder='Store Name' defaultValue={getFunName()} ref={this.myInput}/>
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker