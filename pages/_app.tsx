import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {config, library} from '@fortawesome/fontawesome-svg-core';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faUser, faUsers} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(
    faInstagram, faFacebook, faUser, faUsers
);

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp