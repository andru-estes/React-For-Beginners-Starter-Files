import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    // Stop form from submitting
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addFish(fish);
    // Refresh the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">In Stock</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <input name="desc" ref={this.descRef} type="text" placeholder="desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="image"
        />
        <textarea name="desc" type="text" placeholder="Desc" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
