import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Marquee from '@/widgets/marquee/marquee';
import Header from '@/widgets/header/header';
import { routes } from './routes/routes';

/**
 * The main entry point of the application.
 * This component sets up routing and renders the main layout components such as `Marquee`, `Header`, and the dynamic routes based on the `routes` configuration.
 *
 * @returns {JSX.Element} The rendered application with routing and layout components.
 */

const App = (): JSX.Element => {
	return (
		<Router>
			<Marquee>
				<div className='cursor-default mx-3'>Ruslan Jafarov</div>
			</Marquee>
			<Header />
			<Routes>
				{routes.map(({ path, element: Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			</Routes>
		</Router>
	);
};

export default App;
