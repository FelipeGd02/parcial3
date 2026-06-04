import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { AppContextProvider } from './context/AppContext.tsx';
import './index.css';
import { storeRedux } from './store/store.ts';
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={storeRedux}>
			<AppContextProvider>
				<BrowserRouter>
				 <App />
				</BrowserRouter>
			</AppContextProvider>
		</Provider>
	</StrictMode>,
);
