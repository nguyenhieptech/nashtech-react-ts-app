import { useState, useEffect, useRef } from 'react';
import './switch-button.css';

const SwitchButton = () => {
	const [value, setValue] = useState(1);
	const inputRef = useRef();

	// useEffect(() => {
	// 	inputRef.current;
	// }, []);

	return (
		<label className='form-switch'>
			<input
				onChange={(event) => event.target.checked}
				// ref={inputRef}
				type='checkbox'
			/>
			<i></i>
		</label>
	);
};

export default SwitchButton;
