import { Button } from 'components/atoms';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { nextMonths } from './helpers';

interface Props {}

export const Home: React.FC<Props> = () => {
	const navigate = useNavigate()

	const navigateToMonth = (month: number, year: number) => {
		navigate(`/appointments/${month}/${year}`)
	}
	
 return (
	<Div>
		{nextMonths(3).map(month => {
			return (
				<Button buttonPurpose='borderless' key={month.name} onClick={() => navigateToMonth(month.index, month.year)}>
					<h1>
						{month.name}
					</h1>
				</Button>
			)
		})}
	</Div>
 )
}

const Div = styled.div`
	padding: 100px 10vw;
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: calc(100% - 20vw);
	align-items: flex-start;
`