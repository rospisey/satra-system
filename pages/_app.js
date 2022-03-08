import '../styles/globals.css'
import 'antd/dist/antd.css';
import LayoutView from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutView>
      <Component {...pageProps} />
    </LayoutView>
  )
}

export default MyApp
