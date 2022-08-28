import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  // function renderProduct(p) {
  //   return (
  //     <div key={p.id} className="product">
  //       <a href="/">
  //         <img src={`/images/${p.image}`} alt={p.name} />
  //         <h3>{p.name}</h3>
  //         <p>${p.price}</p>
  //       </a>
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size">
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
