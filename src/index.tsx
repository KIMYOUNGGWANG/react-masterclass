import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme } from "./theme";
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
    <ThemeProvider theme={lightTheme}>
      <App />
      </ThemeProvider>
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
