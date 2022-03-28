import { EMPTY_BROTHER } from "mocks/brothers";
import { IAppointmentResponse } from "types/appointments";
import { IBrother } from "types/brothers";

export const parseAppointments = (data: IAppointmentResponse[], users: IBrother[]) => data.map((appointment) => ({
	...appointment,
	bro1: users.find(user => user._id === appointment.bro1) || EMPTY_BROTHER,
	bro2: users.find(user => user._id === appointment.bro2) || EMPTY_BROTHER
})).sort((a, b) => {
	const dateA = new Date(a.datetime).getTime();
	const dateB = new Date(b.datetime).getTime();
	return dateA > dateB ? 1 : -1;  
})