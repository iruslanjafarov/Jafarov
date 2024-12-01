import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { routes } from './routes/routes';

const App = () => {
	return (
		<Router>
			<Routes>
				{routes.map(({ path, element: Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			</Routes>
		</Router>
	);
};

export default App;
