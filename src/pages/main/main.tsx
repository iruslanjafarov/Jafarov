import Header from '@/widgets/header/header';
import Separator from '@/shared/separator/separator';
import Product from '@/entities/product/ui/product';
import Marquee from '@/widgets/marquee/marquee';

const Main = () => {
	return (
		<>
			<Marquee
				children={<h1 className='cursor-default mx-3'>Ruslan Jafarov</h1>}
			/>
			<Header />
			<Separator />
			<Product />
		</>
	);
};

export default Main;
