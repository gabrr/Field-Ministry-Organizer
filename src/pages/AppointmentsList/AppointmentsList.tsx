import React, { useState } from 'react';
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from 'components/atoms';
import { ApptListEditor } from 'components/organisms';
import { getMonthName } from 'helpers/helpers';

export const AppointmentsList: React.FC = () => {
	const { month, year } = useParams()
	const navigate = useNavigate()

	const [isEditing, setisEditing] = useState(false)

	const goBack = () => navigate('/')
	const handleEditing = () => setisEditing(true)
	const handleSave = () => setisEditing(false)

	return (
		<Div>
			<header>
				<Button buttonPurpose='border' onClick={goBack}>
					Voltar
				</Button>
				{isEditing ?
					<Button buttonPurpose='default' onClick={handleSave}>Salvar</Button> :
					<Button buttonPurpose='default' onClick={handleEditing}>Editar</Button>
				}
			</header>

			<h1 className='page_title'>{getMonthName(Number(month) - 1)}</h1>

			<div className="minstry_lists">
				<ApptListEditor
					group='A'
					month={Number(month)}
					year={Number(year)}
					isEditing={isEditing}
				/>
				<ApptListEditor
					group='B'
					month={Number(month)}
					year={Number(year)}
					isEditing={isEditing}
				/>
			</div>
		</Div>
	)
}

const Div = styled.div`
	width: calc(100% - 10vw);
	padding: 0 5vw 5rem;

	button {
		max-height: 45px;
	}

	header {
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.page_title {
		font-size: 2rem;
	}

	.minstry_lists {
		margin-top: 2rem;
		display: flex;
		justify-content: space-between;
	}
`