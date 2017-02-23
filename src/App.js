import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PRODUCTS = [
  { name: "Bread", quantity: 2 },
  { name: "Milk", quantity: 1 },
  { name: "Eggs", quantity: 6 },
  { name: "Cookies", quantity: 3 },
  { name: "Iogurtes", quantity: 5 }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <ShoppingList products={PRODUCTS} />
        </p>
      </div>
    );
  }
}

class ShoppingList extends React.Component {
  render() {
    return (
      <div>
        <AddProductBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

class AddProductBar extends React.Component {
  render() {
    return (
      <div>
        <label for="product">Product: </label>
        <input type="text" name="product" />
        <label for="quantity">Quantity: </label>
        <input type="text" name="quantity" />
        <button>Add</button>
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
