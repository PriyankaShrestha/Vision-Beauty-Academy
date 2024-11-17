import "@/styles/globals.css";
import { BasenameProvider } from '../context/basenameContext';

export default function App({ Component, pageProps }) {
  return (
    <BasenameProvider>
      <Component {...pageProps}/>
    </BasenameProvider>);
}
