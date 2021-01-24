import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout/index'

function MyApp({ Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp