import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
  typography: {
    title: {
      fontSize: 2,
      fontFamily: 'Tahoma'
    },
    text: {
      fontSize: 1,
      fontFamily: 'Tahoma'
    }
  }
}

export default function App ( { Component, pageProps } ) {
  return (
    <>
      <Head>
        <title>Instalura</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={ theme }>
        <Component { ...pageProps } />
      </ThemeProvider>
    </>
  )
}
