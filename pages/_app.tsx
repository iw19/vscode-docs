import type { AppProps } from "next/app"
import { useState, useEffect } from "react"

function checkLightDarkStatus(): boolean | undefined {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        return true
    else if (window.matchMedia('(prefers-color-scheme: light)').matches)
        return false
    else
        return undefined
}

export default function MyApp({ Component, pageProps }: AppProps) {
//  const [isDark, setIsDark] = useState(true)
  const isDark = checkLightDarkStatus()
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`${
        isDark === undefined ?
            "body { background-color: lightgreen; color: red; }" :
        isDark ?
            "body { background-color: #030; color: greenyellow; }" :
            "body { background-color: pink; color: yellow; }"
      }`}</style>
    </>
  )
}
