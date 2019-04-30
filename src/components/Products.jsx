import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    console.log(props);
    const { products } = props; 
        return (
            <div>
              <h1>Products</h1>
              <ul className="list">
                    {products.map((product) => {
                        return (
                            <li key={product.id}>
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </li>
                        );
                    })}
              </ul>
              <Link to="/">  Back to Home </Link>
            </div>
        );
}

export default Products;