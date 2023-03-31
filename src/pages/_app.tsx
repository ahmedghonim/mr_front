import '@styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutProvider from 'providers/layout-provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  )
}
