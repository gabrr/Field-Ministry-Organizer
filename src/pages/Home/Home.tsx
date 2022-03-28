import { Button } from 'components/atoms';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { nextMonths } from './helpers';
import { getAppointmentsByMonth, getMonthAppointmentObject } from 'services/appointments';
import { useUsers } from 'hooks/users';

interface Props {}

export const Home: React.FC<Props> = () => {
	const navigate = useNavigate()
	const { getAllUsers } = useUsers()

	const navigateToMonth = (month: number, year: number) => {
		navigate(`/appointments/${month}/${year}`)
	}
	
	useEffect(() => {
		getAllUsers()
	}, [])

	return (
		<Div>
			{nextMonths(3).map(month => {
				return (
					<Button buttonPurpose='borderless' key={month.name} onClick={() => navigateToMonth((month.index + 1), month.year)}>
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