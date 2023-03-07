import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import "../styles.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}
