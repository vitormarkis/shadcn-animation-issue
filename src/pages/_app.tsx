import type { AppProps } from "next/app"
import { useEffect, useState } from "react"

import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? <Component {...pageProps} /> : null
}
