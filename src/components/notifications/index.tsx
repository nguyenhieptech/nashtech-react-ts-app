import React from 'react';
import Notification from './Notification';

const Notifications = () => {
	return (
		<div>
			<div className='notification__settings'>
				Control your notification and auto-flow settings
			</div>
			<div>
				<Notification title='Email Notification' />
				<Notification title='Push Notification' />
				<Notification title='Monthly Reports' />
				<Notification title='Quarter Reports' />
			</div>
		</div>
	);
};

export default Notifications;
