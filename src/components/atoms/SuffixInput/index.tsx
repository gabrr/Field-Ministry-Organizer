import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

interface Props {
	onChange: (text: string) => any
	className?: string
	value: string
	isEditing: boolean
}

export const SuffixInput: React.FC<Props> = ({ onChange, value, isEditing }) => {

	const [string, setstring] = useState(value)

	useEffect(() => {
		setstring(value)
	}, [value])

	return (
		<Div>
			{isEditing ? 
				<input
					type="text"
					name="suffix"
					onBlur={e => onChange(e.target.value)}
					onChange={e => setstring(e.target.value) }
					value={string}
				/> : 
				<p className="suffix_label">{value}</p>}
		</Div>
	)
}

const Div = styled.div`
	input {
		color: var(--negative);
    width: 100%;
    max-width: calc(300px - 2rem);
    position: relative;
    border: none;
    padding: 0 1rem;
    background-color: #fff;
    box-shadow: 0 0 11px 3px rgb(0 0 0 / 10%);
    height: 2rem;
    border-radius: var(--border-radius);
	}

	.suffix_label	{
		color: var(--negative);
	}
`