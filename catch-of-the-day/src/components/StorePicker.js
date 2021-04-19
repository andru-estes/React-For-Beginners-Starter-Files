import React, { Component } from 'react'
import { getFunName } from '../helpers'

class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // Stop form from submitting
    event.preventDefault();

    //Get text from the input using this
    const storeName = this.myInput.current.value;

    // Change the page to /store/input using Router
    this.props.history.push(`/store/${storeName}`)    
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* This is our comment */}
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker