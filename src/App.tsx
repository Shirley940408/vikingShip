import React, { useState } from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          defaultIndex={0}
          onSelect={(index) => {
            alert(index);
          }}
        >
          <MenuItem index={0}>cool link1</MenuItem>
          <MenuItem index={1}>cool link2</MenuItem>
          <MenuItem index={2}>cool link3</MenuItem>
        </Menu>
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
