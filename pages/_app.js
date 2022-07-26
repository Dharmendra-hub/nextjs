import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <footer>
      &copy; 2022 All Rights Reserved
    </footer>
  </div>
}

export default MyApp
