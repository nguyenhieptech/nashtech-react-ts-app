import Card from './components/card';
import Price from './components/price';
import './App.css';
import { listCard } from './components/card/ListCard';
import { listPrice } from './components/price/ListPrice';
import Notifications from './components/notifications';

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

			<div className="notifications-container">
				<Notifications />
			</div>
		</div>
	);
}

export default App;
