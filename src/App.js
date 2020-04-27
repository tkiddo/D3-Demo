import React,{lazy} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SuspenseComponent from './components/share/suspenseComponent';
import ErrorBoundary from './components/share/errorBoundary';

const Home = lazy(()=>import('./views/home'));

function App() {
	return (
		<ErrorBoundary>
			<Router>
				<Switch>
					<Route path='/'>
						{SuspenseComponent(Home)}
					</Route>
				</Switch>
			</Router>
		</ErrorBoundary>
	);
}

export default App;
