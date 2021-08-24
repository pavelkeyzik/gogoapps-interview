import ReactDOM from "react-dom";

import { ThemeProvider } from "./design-system";
import { AuthorizedLayout } from "./components/AuthorizedLayout";
import { WatchVideoPage } from "./pages/WatchVideoPage";

function Application() {
  return (
    <AuthorizedLayout>
      <WatchVideoPage />
    </AuthorizedLayout>
  );
}

ReactDOM.render(
  <ThemeProvider>
    <Application />
  </ThemeProvider>,
  document.getElementById("root")
);
