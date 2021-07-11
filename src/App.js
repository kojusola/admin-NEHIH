import './App.css';
import Pages from './routes'
import { BrowserRouter } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient()
function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <div className="App">
        <Pages />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
