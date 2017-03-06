import React from 'react';

class ProductTable extends React.Component {
  render() {
    var rows = [];
    this.props.products.forEach((product) => rows.push(<ProductRow key={product.name} name={product.name} quantity={product.quantity} />));

    return (
      <div>
        <h3>Shopping List</h3>
        <table className="productTable">
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

export default ProductTable;
