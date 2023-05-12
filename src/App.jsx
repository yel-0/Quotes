import "./App.css";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Quotes from "./component/Quotes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" main">
        <Quotes /> <ReactQueryDevtools initialIsOpen />
      </div>
    </QueryClientProvider>
  );
}

export default App;
