import '../styles/globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import store from '../redux/store'
import {Provider} from "react-redux"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
