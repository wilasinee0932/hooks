import { useState } from "react";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(300);

  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems} ชิ้น</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} บาท</h3>
      </div>
      <div>
        <img src="bag.jpg" alt="bag" width="15%" />
        <br />
        กระเป๋าผ้า ราคา {product1} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        🛒เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product1);
          }
        }}
      >
        นำออกจากตะกร้า🛒
      </button>
      <div>
        <img src="sweater.jpg" alt="Sweater" width="15%" />
        <br />
        เสื้อแขนยาว ราคา {product2} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product2);
        }}
      >
        🛒เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product2);
          }
        }}
      >
        นำออกจากตะกร้า🛒
      </button>
      <div>
        <img src="pants.jpg" alt="Pants" width="15%" />
        <br />
        กางเกง ราคา {product3} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product3);
        }}
      >
        🛒เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product3);
          }
        }}
      >
        นำออกจากตะกร้า🛒
      </button>
      {/* <h1>{state}</h1>
      <button onClick={() => setState(state + 7)}>Set State</button> */}
    </div>
  );
}

export default App;
