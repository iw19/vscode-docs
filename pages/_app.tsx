import type { AppProps } from "next/app"
import { useState } from "react"

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(true)
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`${
        window.matchMedia('(prefer-colors-scheme: light)').matches ?
          "body { background-color: brown; color: red; }" :
        window.matchMedia('(prefer-color-scheme: dark)').matches ?
          "body { background-color: lightgreen; color: magenta; }" :
          "body { background-color: transparent; color: contrast(background-color); }"
      }`}</style>
    </>
  )
}
