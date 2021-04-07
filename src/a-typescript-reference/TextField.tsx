import React, { useState, useRef } from 'react';

interface Person {
	firstName: string;
	lastName: string;
}

interface Props {
	text: string;
	ok?: boolean;
	i?: number;
	fn?: (bob: string) => string;
	fn2?: () => void;
	fn3?: Function;
	fn4?: () => number;
	person: Person;
	obj: {
		f1: string;
	};
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
	text: string;
}

const TextField = ({ handleChange }: Props) => {
	const [count, setCount] = useState<number | null | undefined | TextNode>(5);
	const inputRef = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={divRef}>
			<input type='text' ref={inputRef} onChange={handleChange} />
		</div>
	);
};

export default TextField;
