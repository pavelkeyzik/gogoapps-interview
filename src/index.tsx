import ReactDOM from "react-dom";
import { Header, Input, ThemeProvider } from "./design-system";

function Application() {
  return (
    <Header>
      <Header.Logo href="/">GogoApps</Header.Logo>
      <Header.Item full />
      <Header.Item>
        <Input placeholder="Search..." />
      </Header.Item>
    </Header>
  );
}

ReactDOM.render(
  <ThemeProvider>
    <Application />
  </ThemeProvider>,
  document.getElementById("root")
);
