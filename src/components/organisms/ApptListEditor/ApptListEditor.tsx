import React, { useEffect } from 'react';
import styled from 'styled-components'

import { parseGroupsNames } from 'helpers/helpers';

import { allGroups, dates } from 'components/organisms/ApptListEditor/helpers';
import { Select } from 'components/atoms';
import { IBrother } from 'types/brothers';
import { formatDate } from 'utilities/dates';
import { BrotherPresentation } from 'components/molecules';
import { useAppointments } from 'hooks/appointments';
import { updateAppointment } from 'services/appointments';

interface Props {
	group: 'A' | 'B'
	month: number
	year: number
	isEditing: boolean
}

export type HandleBrothersChange = (broId: string, appointId: string, field: string) => void

export const ApptListEditor: React.FC<Props> = ({
	group,
	month,
	year,
	isEditing,
}) => {

	const { appointments, getAppointments, editAppointment, loading } = useAppointments()

	useEffect(() => {
		getAppointments(month, year, group)
	}, [])

	const handleBrothersChange: HandleBrothersChange = (broId, appointmentId, field ) => {
		editAppointment({ appointment: { [field]: broId }, appointmentId, group })
	}

	return (
		<Div>
			<h1 className='list_title'>{parseGroupsNames(allGroups[group].groups)}</h1>

			{!appointments?.[group] && loading ? <h1>Loading</h1> : (
				appointments?.[group]?.map((date) => {
					return (
						<div key={date.datetime} className="appointment_section">
							<p className="date_time_label"> {formatDate(new Date(date.datetime))}</p>
							<p className='warning'>{date.suffix}</p>
							<BrotherPresentation
								className='select'
								group={group}
								showAll={!!date.suffix}
								onChange={(bro) => handleBrothersChange(bro._id, date._id, 'bro1')}
								value={date.bro1}
								isEditing={isEditing}
							/>
							<BrotherPresentation
								className='select'
								group={group}
								showAll={!!date.suffix}
								onChange={(bro) => handleBrothersChange(bro._id, date._id, 'bro2')}
								value={date.bro2}
								isEditing={isEditing}
							/>
						</div>
					)
				})
			)}
		</Div>
	)
}

const Div = styled.div`
	margin-bottom: 3rem;

	.list_title {
		color: var(--secondary-text);
	}

	.appointment_section {
		margin-top: 1rem;
		
		p {
			font-size: 0.8rem;
			font-weight: 600;
			line-height: 1.2rem;
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