import { IBrother } from 'types/brothers';
import { brothers } from 'mocks/brothers';

const groupsA = ["Trevo", "Rio Tavares", "Santos Dumont"]
const groupA = brothers.filter(({ fieldGroup }) => groupsA.includes(fieldGroup))

const groupsB = ["Costeira", "Jorge Lacerda"]
const groupB = brothers.filter(({ fieldGroup }) => groupsB.includes(fieldGroup))

export const allGroups = {
	'A': {
		groups: groupsA,
		brothers: groupA
	},
	'B': {
		groups: groupsB,
		brothers: groupB
	}
}

export const getMonthWeekends = (year: number, month: number) => {
	//startDay 0 equals to sunday
	//month as parameter for Date is 1 based.
	const startDay = new Date(year, month, 1).getDay()
	const endDate = new Date(year, month, 0).getDate()

	const daysToWeek = (7 - startDay) === 7 ? 1 : (7 - startDay)
	const firstWeekendDate = new Date(year, month,  daysToWeek).getDate()

	const isASunday = (day: number) => new Date(year, month, day).getDay() === 0

	const isLastSundayChecker = (date: Date) => {
		const endDate = new Date(year, month, 0)
		const isEndDateASunday = endDate.getDay() === 0
		if (isEndDateASunday) return (date.getDate() === endDate.getDate())
		
		const findLastSunday = (day = 0, year: number, month: number): Date => {
			const lastDay = (day !== 0) ?
				new Date(`${year}/${month}/${day}`).getDate() :
				new Date(year, month, day).getDate()
			
			if ((!Number(lastDay) || day < lastDay - 7) && day !== 0) return new Date()
				const findingDate = new Date(year, month, day)
				if (findingDate.getDay() === 0) return findingDate
				return findLastSunday(lastDay - 1, year, month)
		}

		const lastSunday = findLastSunday(0, year, month)

		return (lastSunday.getDate() === date.getDate())
	}
	
	//if the start day is saturday we want to start from saturday again, but not if it is sunday.
	const daysToSum = startDay === 0 ? 6 : 7
	const weekends: IAppoint[] = []

	//the object that will be out putted inside an array.
	const emptyBrother: IBrother = {
		fieldGroup: '',
		id: '',
		isElder: false,
		isTalker: true,
		isVideoSupporter: false,
		name: '',
	}

	/**
	 * RULES
	 * #1 First sunday all groups are together, se we add a sufix to the end
	 * #2 Last sunday all groups are together EXECEPT the group that will be receiving visit from the Field Ministry Supervisor.
	 */

	interface IAppoint {
		timedate: Date,
		suffix?: string,
		bro1?: IBrother,
		bro2?: IBrother,
	}
	
	type CreateEmptyAppointObjProps = {
		timedate: Date
		isFirstSunday?: boolean
		isLastSunday?: boolean
		list?: IAppoint[]
	}
	
	type CreateEmptyAppointObj = (props: CreateEmptyAppointObjProps) => void

	const createEmptyAppointObj: CreateEmptyAppointObj = ({
		timedate,
		isFirstSunday = false,
		isLastSunday = false,
		list = weekends
	}) => {
		
		const suffix = (isFirstSunday || isLastSunday) ? 'Todos grupos juntos.' : ''
		
		const appoint = {
			timedate: timedate,
			suffix,
			bro1: emptyBrother,
			bro2: emptyBrother,
		}
		
		list.push(appoint)

		return
	}

	const buildDates = (day: number) => {
		if (day > endDate) return

		const newDate = (day: number) => new Date(year, month, day)

		// the first weekend. It can be saturday or sunday.
		if (day === firstWeekendDate) {
			createEmptyAppointObj({ timedate: newDate(day), isFirstSunday: isASunday(day) })
			//if it's saturday, let's add sunday too.
			if (isASunday(day + 1)) {
				createEmptyAppointObj({ timedate: newDate(day + 1), isFirstSunday: true })
			}
			buildDates(day + daysToSum)
			return
		}

		// all the following weekends.
		createEmptyAppointObj({
			timedate: newDate(day),
			isLastSunday: isLastSundayChecker(newDate(day))
		})
		
		
		// If we add one more weekend day and is still part of the same month — GOOD.
		if ((day + 1) < endDate) createEmptyAppointObj({
			timedate: newDate(day + 1),
			isLastSunday: isLastSundayChecker(newDate(day + 1))
		})

		buildDates(day + 7)
		return
	}

	buildDates(firstWeekendDate)
	return weekends
}

const monthsWeekends = (year: number, month: number) => {
	return getMonthWeekends(year, month)
}

export const dates = {
	'A': monthsWeekends,
	'B': monthsWeekends,
}