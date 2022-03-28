import { Select } from 'components/atoms';
import React from 'react';
import styled from 'styled-components'
import { IBrother } from 'types/brothers';

interface Props {
	onChange: (brother: IBrother) => any
	group: 'A' | 'B'
	className?: string
	value?: IBrother
	isEditing: boolean
	showAll: boolean
}

export const BrotherPresentation: React.FC<Props> = ({
	group,
	isEditing,
	onChange,
	className,
	value,
	showAll,
}) => {

	return (
		<Div>
			{isEditing ? 
			<Select {...
				{
					group,
					onChange,
					className,
					value,
					showAll,
				}}
			/> : <p>{value?.name || ''}</p>}
			
		</Div>
 	)
}

const Div = styled.div``