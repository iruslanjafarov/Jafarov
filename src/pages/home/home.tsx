import Marquee from '@/widgets/marquee/marquee';
import Header from '@/widgets/header/header';
import Separator from '@/shared/separator/separator';
import Product from '@/entities/product/ui/product';

const Home = () => {
	return (
		<>
			<Marquee
				children={<div className='cursor-default mx-3'>Ruslan Jafarov</div>}
			/>
			<Header />
			<Separator />
			<Product />
		</>
	);
};

export default Home;
