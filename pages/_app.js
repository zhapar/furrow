import { GlobalProvider } from 'context/globalContext'

import 'tailwindcss/tailwind.css'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
