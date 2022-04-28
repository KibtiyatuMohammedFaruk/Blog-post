import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, session, ... pageProps }) {
  return (
    <SessionProvider session={session}>
    <Navbar />
    <Component {...pageProps} />
  </SessionProvider>
  );

}

export default MyApp;
