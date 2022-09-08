import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {InitialStore} from "./redux/initialStore";
// import {PersistGate} from "redux-persist/integration/react";
// import {persist} from "./redux/initialStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		{/*<PersistGate persistor={persist}>*/}
			<Provider store={InitialStore}>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</Provider>
		{/*</PersistGate>*/}
	</>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
