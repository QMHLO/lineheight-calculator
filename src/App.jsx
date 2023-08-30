import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    lineValue: "",
    fontSize: "",
    result: null,
  });

  function calculate(lineValue, fontSize) {
    const LineHeightValue = Number(lineValue);
    const FontSizeValue = Number(fontSize);
    const result = LineHeightValue / FontSizeValue;
    return result;
  }

  const resetHandler = (e) => {
    e.preventDefault();
    setData({
      lineValue: "",
      fontSize: "",
      result: null,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { lineValue, fontSize } = data;
    const result = calculate(lineValue, fontSize);
    setData({
      ...data,
      result: result,
    });
  };

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="block">
        <h2>LineHeight Calculator</h2>
        <p className="result">{data.result !== null ? `Result: ${data.result}` : null}</p>
        <form onSubmit={submitHandler}>
          <input name="lineValue" value={data.lineValue} type="number" onChange={onChangeHandler} placeholder="Please enter lineheight value" required />
          <input name="fontSize" value={data.fontSize} type="number" onChange={onChangeHandler} placeholder="Please enter font size" required />
          <button type="submit">Calculate</button>
          <button className="reset" onClick={resetHandler}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
