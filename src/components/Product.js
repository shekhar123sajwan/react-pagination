import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product-wrapper">
      <div>
        <div>
          <img src={`${product.thumbnail}`} />
        </div>
        <div>
          <p>
            {product.title}
            <br />
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
