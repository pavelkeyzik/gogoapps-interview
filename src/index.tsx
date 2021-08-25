import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";

import { ThemeProvider } from "./design-system";
import { client, VideosSearchProvider } from "./core";
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
    <QueryClientProvider client={client}>
      <VideosSearchProvider>
        <Application />
      </VideosSearchProvider>
    </QueryClientProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
