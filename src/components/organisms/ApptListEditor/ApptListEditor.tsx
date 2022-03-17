import React from 'react';
import styled from 'styled-components'

import { parseGroupsNames } from 'helpers/helpers';

import { allGroups, dates } from 'components/organisms/ApptListEditor/helpers';
import { Select } from 'components/atoms';
import { IBrother } from 'types/brothers';
import { formatDate } from 'utilities/dates';

interface Props {
	group: 'A' | 'B'
	month: number
	year: number
}

export type HandleBrothersChange = (brother: IBrother, index: number, date: Date, group: Props['group']) => void

export const ApptListEditor: React.FC<Props> = ({ group, month, year }) => {

	const handleBrothersChange: HandleBrothersChange = (brother, index, date, group) => {
		console.log(brother.name, index, date, group)
	}

	return (
		<Div>
			<h1 className='list_title'>{parseGroupsNames(allGroups[group].groups)}</h1>

			{dates[group](year, month).map((date) => {
				return (
					<div key={date.timedate.toUTCString()} className="appointment_section">
						<p className="date_time_label"> {formatDate(date.timedate)} <span>{date.suffix}</span></p>
						<Select
							className='select'
							group={group}
							onChange={(props) => handleBrothersChange(props, 0, date.timedate, group)}
							value={date.bro1}
						/>
						<Select
							className='select'
							group={group}
							onChange={(props) => handleBrothersChange(props, 1, date.timedate, group)}
							value={date.bro2}
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
		margin-top: 2rem;
		
		p {
			font-size: 0.8rem;
			font-weight: 600;
		}

		span {
			color: var(--negative);
		}
	}

	.select {
		margin: 0.3rem 0;
	}

`