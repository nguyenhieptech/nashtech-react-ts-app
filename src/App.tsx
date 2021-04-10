import Card from './components/card';
import Price from './components/price';
import { listCard } from './components/card/ListCard';
import { listPrice } from './components/price/ListPrice';
import Notifications from './components/notifications';
import Login from './pages/login-register/Login';
import Register from './pages/login-register/Register';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div>
			<div className='container'>
				<Router>
					<div>
						<Link to='/login'>Login</Link>
					</div>
					<div>
						<Link to='/register'>Register</Link>
					</div>
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
				</Router>
			</div>
			{/* <div className='card-container'>
				{listCard.map((item) => (
					<Card
						icon={item.icon}
						number={item.number}
						operator={item.operator}
						title={item.title}
					/>
				))}
			</div> */}

			{/* Not finished Price component yet
			<div className='price-container'>
				{listPrice.map((item) => (
					<Price
						icon={item.icon}
						title={item.title}
						price={}
						taxes={}
						extraInfo={}
					/>
				))}
			</div> */}

			{/* <div className='notifications-container'>
				<Notifications />
			</div> */}
		</div>
	);
}

export default App;
