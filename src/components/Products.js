import React, { useEffect, useState } from "react";
import Paginations from "./Pagination";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  let totalProducts = products.length;
  console.log("render");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);
  let paginateLinks = Math.ceil(totalProducts / postPerPage);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const respnse = await data.json();
    setProducts(respnse.products);
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  let filterdProducts = products.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      {filterdProducts &&
        filterdProducts?.map((product) => {
          return <Product product={product} />;
        })}
      <Paginations
        paginateLinks={paginateLinks}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Products;
