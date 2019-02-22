/* import all vendor .scss/css here (e.g. import 'font-awesome/scss/font-awesome.scss') */
import './styles/w3.css';

import { Routes, DefaultRoute } from './routes';

/* import global app styles here to override component's css styles */

if (module.hot) {
    module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

/* inject application at <body> */
m.route(document.body, DefaultRoute, Routes);
