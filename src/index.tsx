import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";

import { ThemeProvider } from "./design-system";
import { AuthorizedLayout } from "./components/AuthorizedLayout";
import { WatchVideoPage } from "./pages/WatchVideoPage";
import { client } from "./core/client";
import { VideosSearchProvider } from "./core/hooks/use-video/search";

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
