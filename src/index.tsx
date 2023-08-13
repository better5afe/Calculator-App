import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

import './assets/theme-one.css';
import './assets/theme-two.css';
import './assets/theme-three.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(<App />);
