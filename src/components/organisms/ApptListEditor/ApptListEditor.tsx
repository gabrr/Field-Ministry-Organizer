import React from 'react';
import styled from 'styled-components'

import { parseGroupsNames } from 'helpers/helpers';

import { allGroups, dates } from 'components/organisms/ApptListEditor/helpers';
import { Select } from 'components/atoms';
import { IBrother } from 'types/brothers';
import { formatDate } from 'utilities/dates';
import { BrotherPresentation } from 'components/molecules';

interface Props {
	group: 'A' | 'B'
	month: number
	year: number
	isEditing: boolean
}

export type HandleBrothersChange = (brother: IBrother, index: number, date: Date, group: Props['group']) => void

export const ApptListEditor: React.FC<Props> = ({
	group,
	month,
	year,
	isEditing,
}) => {

	const handleBrothersChange: HandleBrothersChange = (brother, index, date, group) => {
		console.log(brother.name, index, date, group)
	}


	console.log(dates[group](year, month))

	return (
		<Div>
			<h1 className='list_title'>{parseGroupsNames(allGroups[group].groups)}</h1>

			{dates[group](year, month).map((date) => {
				return (
					<div key={date.timedate.toUTCString()} className="appointment_section">
						<p className="date_time_label"> {formatDate(date.timedate)}</p>
						<p className='warning'>{date.suffix}</p>
						<BrotherPresentation
							className='select'
							group={group}
							onChange={(props) => handleBrothersChange(props, 0, date.timedate, group)}
							value={date.bro1}
							isEditing={isEditing}
						/>
						<BrotherPresentation
							className='select'
							group={group}
							onChange={(props) => handleBrothersChange(props, 1, date.timedate, group)}
							value={date.bro2}
							isEditing={isEditing}
						/>
					</div>
				)
			})}
			
		</Div>
	)
}

const Div = styled.div`
	.list_title {
		color: var(--secondary-text);
	}

	.appointment_section {
		margin-top: 1rem;
		
		p {
			font-size: 0.8rem;
			font-weight: 600;
		}
	}

	p.warning {
		color: var(--negative);
	}

	.date_time_label {
		color: var(--datetime-text);
	}

	.select {
		margin: 0.3rem 0;
	}

`