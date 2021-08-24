import ReactDOM from "react-dom";
import { Header, ThemeProvider } from "./design-system";

function Application() {
  return (
    <div>
      <Header>
        <Header.Logo href="/">GogoApps</Header.Logo>
        <Header.Item full>{/* TODO: Input */}</Header.Item>
      </Header>
    </div>
  );
}

ReactDOM.render(
  <ThemeProvider>
    <Application />
  </ThemeProvider>,
  document.getElementById("root")
);
