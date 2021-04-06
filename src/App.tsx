import Card from './components/Card';
import Price from './components/Price';
import './App.css';
import { listCard } from './components/Card/ListCard';
import { listPrice } from './components/Price/ListPrice';

function App() {
	return (
		<div>
			<div className='card-container'>
				{listCard.map((item) => (
					<Card
						icon={item.icon}
						number={item.number}
						operator={item.operator}
						title={item.title}
					/>
				))}
			</div>

			{/* Not finished Price component yet */}
			<div className='price-container'>
				{/* {listPrice.map((item) => (
					<Price
						icon={item.icon}
						title={item.title}
						price={}
						taxes={}
						extraInfo={}
					/>
				))} */}
			</div>
		</div>
	);
}

export default App;
