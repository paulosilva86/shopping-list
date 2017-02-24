import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <ShoppingList />
        </p>
      </div>
    );
  }
}

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

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

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
  }

  render() {
    return (
      <div>
        <label for="product">Product: </label>
        <input type="text" name="product" value={this.props.product} onChange={this.handleProductInputChange} />
        <label for="quantity">Quantity: </label>
        <input type="text" name="quantity" value={this.props.quantity} onChange={this.handleQuantityInputChange} />
        <button onClick={this.handleAddButtonClick}>Add Product</button>
      </div>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    this.props.products.forEach((product) => rows.push(<ProductRow name={product.name} quantity={product.quantity} />));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.quantity}</td>
      </tr>
    );
  }
}

export default App;
