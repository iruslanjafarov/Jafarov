import { FC } from 'react';
import {
	Disclosure as DisclosureComponent,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { motion } from 'framer-motion';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

interface IDisclosure {
	title: string;
	text: string;
}

const Disclosure: FC<IDisclosure> = ({ title, text }): JSX.Element => {
	return (
		<DisclosureComponent>
			{({ open }) => (
				<div className='flex flex-col gap-2 text-left'>
					<DisclosureButton className='flex justify-between border-b pb-2 items-center w-full text-xl font-medium'>
						<span>{title}</span>
						<motion.div
							initial={{ rotate: 0 }}
							animate={{ rotate: open ? 180 : 0 }}
							transition={{ duration: 0.3 }}
						>
							{open ? (
								<MinusIcon className='w-6 h-6 text-gray-500' />
							) : (
								<PlusIcon className='w-6 h-6 text-gray-500' />
							)}
						</motion.div>
					</DisclosureButton>
					{open && (
						<DisclosurePanel>
							<div className='text-gray-600 overflow-hidden'>{text}</div>
						</DisclosurePanel>
					)}
				</div>
			)}
		</DisclosureComponent>
	);
};

export default Disclosure;
