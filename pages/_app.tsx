import type { AppProps } from "next/app"
import { useState } from "react"

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        ${ isDark ? "body { background-color: green; color: red; }" : "body { background-color: blue; color: yellow; }" }
      `}</style>
    </>
  )
}
