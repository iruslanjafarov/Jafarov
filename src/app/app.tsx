import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Marquee from '@/widgets/marquee/marquee';
import Header from '@/widgets/header/header';
import Separator from '@/shared/separator/separator';
import { routes } from './routes/routes';

const App = () => {
	return (
		<Router>
			<Marquee>
				<div className='cursor-default mx-3'>Ruslan Jafarov</div>
			</Marquee>
			<Header />
			<Separator />
			<Routes>
				{routes.map(({ path, element: Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			</Routes>
		</Router>
	);
};

export default App;
