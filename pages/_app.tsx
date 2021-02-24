import { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
