import React from "react";

const App = () => {
  const buttonOnClick = () => {
    alert("aa");
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello world!</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={buttonOnClick}>ボタン</button>
    </>
  );
};

export default App;
