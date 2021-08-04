import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
  }
`

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
