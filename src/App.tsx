import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import Web from './Routes/Web';
import { GlobalStyle } from './Styles/GlobalStyle';
import { DarkTheme, LightTheme } from './Styles/Theme';

type Props = {}

const App:FC<Props> = () => {
  const [theme, setTheme] = React.useState<boolean>(false);
  return (
    <ThemeProvider theme={theme?DarkTheme:LightTheme}>
      <GlobalStyle />
      <BrowserRouter>
      <Web />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App