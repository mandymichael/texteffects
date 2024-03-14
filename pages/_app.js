import '../styles/global.css';
import localFont from 'next/font/local'

const roboto = localFont({ src: './fonts/RobotoFlex.woff2'});
const rotor = localFont({ src: './fonts/rotor-VF.woff2'});

function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }

        h1 {
          font-family: ${rotor.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default App;
