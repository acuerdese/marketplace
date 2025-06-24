import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Marketplace</h1>
      </header>
      <main>
        <div className="product-list">
          <div className="product">
            <h3>Product 1</h3>
            <p>$10.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <h3>Product 2</h3>
            <p>$20.00</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
