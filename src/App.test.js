import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import ProductTable from './components/ProductTable';
import AddProductBar from './components/AddProductBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a ProductTable', () => {
  const productList = [{ name: "Milk", quantity: "1" }, { name: "Eggs", quantity: "6" }];
  const wrapper = shallow(<ProductTable products={productList} />);
  expect(wrapper.find('tbody').children().length).toEqual(productList.length);
});

it('renders an AddProductBar', () => {
  const wrapper = shallow(<AddProductBar product="Milk" quantity="1" />);
  expect(wrapper.find('.productInput').props().value).toEqual("Milk");
  expect(wrapper.find('.quantityInput').props().value).toEqual("1");
  expect(wrapper.find('button').text()).toEqual("Add Product");
});
