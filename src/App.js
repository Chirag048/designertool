import "./App.css";
import React, { useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import GrapeJSPresetWebpage from "grapesjs-preset-webpage";

function App() {
  useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      fromElement: true,
      height: "100vh",
      width: "auto",
      storageManager: false,
      panels: { defaults: [] },
      plugins: [GrapeJSPresetWebpage],
    });
  });

  return (
    <>
      <div id="gjs">
        <h1>Hello Developers!</h1>
      </div>
    </>
  );
}

export default App;
