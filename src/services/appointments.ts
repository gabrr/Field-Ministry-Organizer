import { Api } from "api"
import { AxiosResponse } from "axios"
import { IAppointmentResponse } from "types/appointments"

type GetMonthAppointmentObject = (date: string | "2022/01") => Promise<IAppointmentResponse>

export const getMonthAppointmentObject: GetMonthAppointmentObject = async (date) => {
    try {
        const response: AxiosResponse<IAppointmentResponse> = await Api.post('appointments/create-month', { date })
        return response.data

    } catch (error) {
        throw error
    }
}