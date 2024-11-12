import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data/data"; // Importing the data

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Marvell's Pizza Co</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="pizza-grid">
        {pizzaData.map((pizza, index) => (
          <div className="pizza" key={index}>
            <img src={process.env.PUBLIC_URL + "/" + pizza.photoName} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
            <p>${pizza.price}</p>
            {pizza.soldOut ? (
              <p className="sold-out-notice">SOLD OUT</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour > 10 && hour < 22;
  return (
    <footer className="footer">
      <p>{isOpen ? "We are currently open" : "Sorry, we're closed"}</p>
      <button className="order-btn">Place Order</button>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
