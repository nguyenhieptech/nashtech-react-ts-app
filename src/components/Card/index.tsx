import './Card.css';

interface CardProps {
	icon: any;
	operator: string;
	number: number;
	title: string;
}

const Card = (props: CardProps) => {
	const { icon, number, operator, title } = props;

	return (
		<div className='card'>
			<div className='card__icon'>{icon}</div>
			<div className='right'>
				<span className='card__number'>{number}</span>
				<span className='card__operator'>{operator}</span>
				<div className='card__title'>{title}</div>
			</div>
		</div>
	);
};

export default Card;
