import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const countUpOnClick = () => {
    setNum(num + 1);
  };
  const switchShowFlagOnClick = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Hello world!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={countUpOnClick}>カウントアップ</button>
      <br />
      <button onClick={switchShowFlagOnClick}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^_^)</p>}
    </>
  );
};

export default App;
