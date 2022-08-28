import React, { useState } from "react";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

// Copied from productService.js.
// Added key arg since react-query passes the query key as the first argument.
export async function getProducts(key, category) {
  const response = await fetch(
    process.env.REACT_APP_API_BASE_URL + "products?category=" + category
  );
  if (response.ok) return response.json();
  throw response;
}

export default function Products() {
  const { category } = useParams();
  const [size, setSize] = useState("");
  const { data: products, isLoading, error } = useQuery(
    ["products", category],
    getProducts
  );

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`/${category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </Link>
      </div>
    );
  }

  const filteredProducts = size
    ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
    : products;

  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (products.length === 0) return <PageNotFound />;

  return (
    <>
      <section id="filters">
        <label htmlFor="size">Filter by Size:</label>{" "}
        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">All sizes</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        {size && <h2>Found {filteredProducts.length} items</h2>}
      </section>

      <section id="products">{filteredProducts.map(renderProduct)}</section>
    </>
  );
}
