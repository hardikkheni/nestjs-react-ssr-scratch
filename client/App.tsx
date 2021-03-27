import React, { useState } from "react";

export const App = () => {
  const [val, setVal] = useState("asdasdadasdasd");
  const hashChangeEvent = (e: any) => {
    setVal(e.target.value);
  };
  return (
    <>
      <h1>React Now jahjahsasasd</h1>
      <input type="text" value={val} onChange={hashChangeEvent} />
    </>
  );
};
