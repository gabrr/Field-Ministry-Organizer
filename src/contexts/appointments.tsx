import { isEmpty } from 'lodash'
import { createContext, useEffect, useState } from "react";
import { getAppointmentsByMonth, updateAppointment, UpdateAppointmentProps } from "services/appointments";
import { getAllBrother } from "services/users";
import { IAppointmentParsed } from "types/appointments";
import { parseAppointments } from "utilities/appointments";

interface EditAppointment extends UpdateAppointmentProps {
	datetime: string
	group: 'A' | 'B'
}

interface AppointmentContextProps {
	appointments: { [key: string]: IAppointmentParsed[] } | undefined
	getAppointments: (month: number, year: number, group: 'A' | 'B') => void
	loading: boolean
	error: boolean
	editAppointment: (props: EditAppointment) => void
}

export const AppointmentContext = createContext<AppointmentContextProps>(null!)

export const AppointmentProvider: React.FC = ({ children }) => {
	
	const [appointments, setappointments] = useState<{ [key: string]: IAppointmentParsed[] }>()
	const [loading, setloading] = useState<AppointmentContextProps['loading']>(true)
	const [error, seterror] = useState<AppointmentContextProps['error']>(false)

	const getAppointments: AppointmentContextProps['getAppointments'] = async (month, year, group) => {
		setloading(true)
		seterror(false)

		getAllBrother()
			.then((brothers) => {
				getAppointmentsByMonth(month, year, group)
					.then((data) => setappointments(prev => ({ ...prev, [group]: parseAppointments(data, brothers) })))
					.catch(error => {
						console.error(error)
						seterror(true)
					})
					.finally(() => setloading(false))
			})		
	}

	const editAppointment = ({ appointment, appointmentId, datetime, group }: EditAppointment) => {

		const month = new Date(datetime || '').getMonth() + 1
		const year = new Date(datetime || '').getFullYear()

		updateAppointment({ appointment, appointmentId })
			.then(() => getAppointments(month, year, group))
	}

	const value = {
		appointments,
		getAppointments,
		loading,
		error,
		editAppointment,
	}

	return (
		<AppointmentContext.Provider value={value} >
			{children}
		</AppointmentContext.Provider>
	)
}