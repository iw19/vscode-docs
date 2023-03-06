import type { AppProps } from "next/app"
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'next-themes'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: transparent;
    --fg: contrast(--bg);
  }

  [data-theme="light"] {
    --bg: white;
    --fg: black;
  }

  [data-theme="dark"] {
    --bg: #111;
    --fg: #aaa;
  }
`

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
