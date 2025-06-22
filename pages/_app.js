import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../components/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
