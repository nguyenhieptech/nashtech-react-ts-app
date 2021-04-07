import React, { useState } from 'react';
import SwitchButton from './SwitchButton';
import './notification.css';

interface NotificationProps {
	title?: string;
}
const Notification = (props: NotificationProps) => {
	const { title } = props;
  
	return (
		<div className='notification'>
			<div className='notification__info'>
				<div className='notification__info--title'>{title}</div>
				<p className='notification__info--selection'>
					Commits data and history
				</p>
			</div>
			<SwitchButton />
		</div>
	);
};

export default Notification;
