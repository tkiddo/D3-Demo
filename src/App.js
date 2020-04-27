import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import routes from './routes/index';
import ErrorBoundary from './components/share/errorBoundary';
import FrontEndAuth from './components/share/frontEndAuth';

function App() {
	return (
		<ErrorBoundary>
			<Router>
				<Switch>
					<FrontEndAuth config={routes} />
				</Switch>
			</Router>
		</ErrorBoundary>
	);
}

export default App;
