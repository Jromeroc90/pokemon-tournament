import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import theme, { GlobalStyle } from './util/theme';
import Router from './router';
import { store } from './store';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // refetchOnMount: true,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <div className='app'>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
          <Provider store={store}>
            <Router />
            {!import.meta.env.PROD && (
              <ReactQueryDevtools />
            )}
          </Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
