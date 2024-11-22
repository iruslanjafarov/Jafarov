import { lazy } from 'react';

const Main = lazy(() => import('../pages/main/main'));

const App = () => {
	return <Main />;
};

export default App;
