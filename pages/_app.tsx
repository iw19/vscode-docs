import type { AppProps } from "next/app"
import { useState } from "react"

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background: ${ isDark ? "#111" : "white" };
          foreground: ${ isDark ? "#aaa" : "black" };
        }
      `}</style>
    </>
  )
}
