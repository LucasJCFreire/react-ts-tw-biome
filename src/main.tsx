import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './main.css';

createRoot(document.querySelector('#root') as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
