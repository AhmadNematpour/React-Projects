import { useState } from "react";

function App() {
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(10);
  const [color, setColor] = useState("#000000");
  console.log(horizontal, vertical, blur, spread, color)

  return (
    <div className="app">
      <div className="control">
        <div className="form-group">
          <label>طول افقی</label>
          <input
            type="range"
            min="-200"
            max="200"
            className="form-range"
            value={horizontal}
            onChange={(e) => setHorizontal(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>طول عمودی</label>
          <input
            type="range"
            min="-200"
            max="200"
            className="form-range"
            value={vertical}
            onChange={(e) => setVertical(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>تاری</label>
          <input
            type="range"
            min="0"
            max="200"
            className="form-range"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>گسترش رنگ</label>
          <input
            type="range"
            min="-100"
            max="50"
            className="form-range"
            value={spread}
            onChange={(e) => setSpread(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>رنگ</label>
          <input
            type="color"
            className="form-control form-control-color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
      <div className="output">
        <div className="box" style={{boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} `}}>
          <p>box-shadow: {horizontal}px {vertical}px {blur}px {spread}px {color} </p>
        </div>
      </div>
    </div>
  );
}

export default App;
