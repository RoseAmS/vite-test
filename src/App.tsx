import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Label, LinearProgressBar } from "monday-ui-react-core";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <Button
          size={Button.sizes.LARGE}
          color={Button.colors.BRAND}
          kind={Button.kinds.PRIMARY}
        >
          This is a large Button
        </Button>
      </div>
      <div>
        <Label color={Label.colors.DARK} text="This is a label in Dark" />
      </div>
      <div>
        <h2>This is a linear Progress Bar in Positive color</h2>
        <LinearProgressBar
          barStyle={LinearProgressBar.barStyles.POSITIVE}
          className={LinearProgressBar.sizes.MEDIUM}
          size="medium"
          value={20}
        />
      </div>
    </>
  );
}

export default App;
