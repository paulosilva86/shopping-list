import React from 'react';
import AddProductBar from './AddProductBar'
import ProductTable from './ProductTable'

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      quantity: '',
      productList: [] // { name: "Milk", quantity: "1" }
    };

    this.handleProductInput = this.handleProductInput.bind(this);
    this.handleQuantityInput = this.handleQuantityInput.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    this.handleLoadButtonClick = this.handleLoadButtonClick.bind(this);
  }

  handleProductInput(productName) {
    this.setState({
      product: productName
    })
  }

  handleQuantityInput(quantity) {
    this.setState({
      quantity: quantity
    })
  }

  handleAddButtonClick() {
    this.setState({productList: [...this.state.productList, { name: this.state.product, quantity: this.state.quantity }]});
    this.setState({product: ''});
    this.setState({quantity: ''});

  }

  handleSaveButtonClick() {
    localStorage.setItem('productList', JSON.stringify(this.state.productList));
  }

  handleLoadButtonClick() {
    this.setState({
      productList: JSON.parse(localStorage.getItem('productList'))
    });
  }

  render() {
    return (
      <div className="shopping-list">
        <AddProductBar
          product={this.state.product}
          quantity={this.state.quantity}
          onProductInput={this.handleProductInput}
          onQuantityInput={this.handleQuantityInput}
          onAddButtonClick={this.handleAddButtonClick}
        />
        <ProductTable
          products={this.state.productList}
        />
        <button onClick={this.handleSaveButtonClick}>Save</button>
        <button onClick={this.handleLoadButtonClick}>Load</button>
      </div>
    );
  }
}

export default ShoppingList;
