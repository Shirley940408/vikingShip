import React, { useState } from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        {showAlert && (
          <Alert
            altType={AlertType.Success}
            title={"This is a customized title"}
            message={"This is alert"}
            onClose={() => {
              setShowAlert(false);
            }}
          />
        )}
        <Button> Hello Default</Button>
        <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Large}>
          Large Hello
        </Button>
        <Button btnType={ButtonType.Link} href={"http://www.baidu.com"}>
          baidu Link
        </Button>
        <Button
          btnType={ButtonType.Link}
          disabled
          href={"http://www.baidu.com"}
        >
          baidu Link
        </Button>
        <Button size={ButtonSize.Small}>Small Button</Button>
        <Button btnType={ButtonType.Danger}>Danger Style</Button>
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
