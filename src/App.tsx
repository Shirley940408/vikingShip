import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button> Hello </Button>
        <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Large}>
          Hello
        </Button>
        <Button btnType={ButtonType.Link} href={"http://www.baidu.com"}>
          baidu
        </Button>
        <></>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
