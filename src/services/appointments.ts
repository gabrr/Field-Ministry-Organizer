import { Api } from "api"
import { AxiosResponse } from "axios"
import { IAppointmentResponse } from "types/appointments"

type GetMonthAppointmentObject = (date: string | "2022/01") => Promise<IAppointmentResponse[]>

export const getMonthAppointmentObject: GetMonthAppointmentObject = async (date) => {
    try {
			const response: AxiosResponse<IAppointmentResponse[]> = await Api.post('appointments/get-month-object', { date })
			return response.data

    } catch (error) {
        throw error
    }
}

export const getAllAppointments: GetMonthAppointmentObject = async () => {
    try {
			const response: AxiosResponse<IAppointmentResponse[]> = await Api.get('appointments/')
			return response.data

    } catch (error) {
        throw error
    }
}

/**
 * @param month 1 based number
 * @param year 2022 — for example
 */
export const getAppointmentsByMonth = async (month: number, year: number, group: 'A' | 'B') => {
    try {
			const response: AxiosResponse<IAppointmentResponse[]> = await Api.get(`appointments/year/${year}/month/${month}/group/${group}`)
			return response.data

    } catch (error) {
        throw error
    }
}

export interface UpdateAppointmentProps {
	appointmentId: string
	appointment: {
		bro1?: string
		bro2?: string
	}
	group: 'A' | 'B'
}
export const updateAppointment = async ({ appointmentId, appointment, group }: UpdateAppointmentProps) => {
    try {
			const response: AxiosResponse<IAppointmentResponse> = await Api.patch(`appointments/${appointmentId}/group/${group}`, { ...appointment })
			return response.data

    } catch (error) {
        throw error
    }
}