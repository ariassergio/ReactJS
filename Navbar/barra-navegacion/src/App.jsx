import React from 'react';
import Nav from './Components/Nav';
import ProductList from './Components/ProductList';
import products from './data/products';
import './Styles/style.scss';

function App() {
  return (
    <div className="App">
      <div className="bg-slate-900">
        <Nav />
      </div>
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
