import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";

import { ThemeProvider } from "./design-system";
import { AuthorizedLayout } from "./components/AuthorizedLayout";
import { WatchVideoPage } from "./pages/WatchVideoPage";
import { client } from "./core/client";

function Application() {
  return (
    <AuthorizedLayout>
      <WatchVideoPage />
    </AuthorizedLayout>
  );
}

ReactDOM.render(
  <ThemeProvider>
    <QueryClientProvider client={client}>
      <Application />
    </QueryClientProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
