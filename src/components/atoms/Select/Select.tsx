import { allGroups } from 'components/organisms/ApptListEditor/helpers';
import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import { IBrother } from 'types/brothers';

interface Props {
	onChange: (brother: IBrother) => any
	group: 'A' | 'B'
	className?: string
	value?: IBrother
}

export const Select: React.FC<Props> = ({ onChange, className, group, value }) => {
	const list = useRef<HTMLDivElement>(null)
	const brothers = allGroups[group].brothers
	const index = allGroups[group].brothers.findIndex(({ name }) => name === value?.name)

	const [brotherId, setbrotherId] = useState(index)
	const [isListOpen, setisListOpen] = useState(false)
	
	const handleListOption = (index: number) => {
		setbrotherId(index)
		onChange(brothers[index])
	}
	
	const focus = () => {
		setisListOpen(true)
		list.current?.focus()
	}

	const closeList = () => setisListOpen(false)

	return (
		<Div className={className}>
			<div className="select_list">
				<div onClick={focus} onBlur={closeList} className="value_holder">{brothers[brotherId]?.name || ''}</div>
				<div
					ref={list}
					tabIndex={0}
					onBlur={closeList}
					className={`options_container ${isListOpen ? 'open' : 'close'}`}
				>
					{brothers.map((brother, index) => {
						return (
							<div
								key={index}
								className="brother_list_item"
								onClick={() => handleListOption(index)}
							>
								{brother.name}
							</div>
						)
					})}
				</div>
			</div>
			
		</Div>
 	)
}

const Div = styled.div`
	color: var(--secondary-text);
	min-width: 400px;
	position: relative;

	.value_holder {
		height: 2rem;
		box-shadow: 7px 14px 30px 10px rgba(0, 0, 0, 0.08);
		border-radius: var(--border-radius);
		display: flex;
		align-items: center;
		padding: 0 1rem;
		font-weight: 700;
		background-color: var(--background-color);
		transition: box-shadow 200ms ease-in-out;
		user-select: none;

		&:hover {
			box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.08);
		}
	}

	.options_container {
		background-color: var(--background-color);
		box-shadow: 7px 14px 30px 10px rgba(0, 0, 0, 0.08);
		border-radius: var(--border-radius);
		margin-top: 0.1rem;
		z-index: 1;
		opacity: 0;
		position: absolute;
		width: 100%;
		transition: opacity 200ms ease-in-out;

		&:focus {
			outline: none;
			border: none;
		}

		&.open {
			opacity: 1;
			pointer-events: all;
			z-index: 2;
		}

		&.close {
			opacity: 0;
			pointer-events: none;
		}
	}

	.brother_list_item {
		height: 25px;
		display: flex;
		align-items: center;
		padding: 0 1rem;
		cursor: pointer;

		&:hover {
			background-color: rgba(0, 0, 0, 0.06);
		}
	}

	.brother_list_item:first-child {
		padding-top: 0.5rem;
	}

	.brother_list_item:last-child {
		padding-bottom: 0.5rem;
	}
`