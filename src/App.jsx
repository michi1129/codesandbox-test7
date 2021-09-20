import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const buttonOnClick = () => {
    alert("aa");
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello world!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={buttonOnClick}>ボタン</button>
    </>
  );
};

export default App;
