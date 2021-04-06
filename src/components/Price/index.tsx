import React from 'react';
import './Price.css';

interface PriceProps {
	icon?: any;
	title?: string;
	price?: number;
	taxes?: string;
	extraInfo?: string;
}

const Price = (props: PriceProps) => {
	const { icon, title, price, taxes } = props;

	return (
		<div className='price'>
			<div className='price__icon'>{icon}</div>
			<div className='price__title'>{title}</div>
			<div className='price__price'>{price}</div>
			<div className='price__taxes'>{taxes}</div>
			<button className='btn'>Buy Now</button>
		</div>
	);
};

export default Price;
