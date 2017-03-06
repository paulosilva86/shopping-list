import React from 'react';

class AddProductBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleProductInputChange = this.handleProductInputChange.bind(this);
    this.handleQuantityInputChange = this.handleQuantityInputChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
  }

  handleProductInputChange(e) {
    this.props.onProductInput(e.target.value);
  }

  handleQuantityInputChange(e) {
    this.props.onQuantityInput(e.target.value);
  }

  handleAddButtonClick(e) {
    this.props.onAddButtonClick(e);
    this.productInput.focus();
  }

  render() {
    return (
      <div>
        <label>Product: </label>
        <input
          type="text"
          name="product"
          value={this.props.product}
          onChange={this.handleProductInputChange}
          ref={input => this.productInput = input}
          className="productInput"
        />
        <label>Quantity: </label>
        <input
          type="text"
          name="quantity"
          value={this.props.quantity}
          onChange={this.handleQuantityInputChange}
          className="quantityInput"
        />
        <button onClick={this.handleAddButtonClick}>Add Product</button>
      </div>
    );
  }

  componentDidMount(){
    this.productInput.focus();
  }
}

export default AddProductBar;
