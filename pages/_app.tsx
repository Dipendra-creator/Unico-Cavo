import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(
    faGithub, faInstagram, faYoutube, faFacebook
);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
