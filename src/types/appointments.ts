import type { IBrother } from 'types/brothers';

export interface IAppointmentParsed {
	bro1: IBrother;
	bro2: IBrother;
	_id: string;
	dateGroup: string;
	datetime: string;
	suffix: string;
}

export interface IAppointmentResponse {
	"_id": string
	"dateGroup": string
	"datetime": string
	"suffix": string
	"bro1": string
	"bro2": string
}

export interface IAppoint {
	timedate: Date,
	suffix?: string,
	bro1?: IBrother,
	bro2?: IBrother,
}

export type CreateEmptyAppointObjProps = {
	timedate: Date
	isFirstSunday?: boolean
	isLastSunday?: boolean
	list?: IAppoint[]
}

export interface IGroupsListDates {
	A: IAppoint[]
	B: IAppoint[]
}