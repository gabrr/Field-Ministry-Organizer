import { getMonths } from "helpers/helpers"

export const nextMonths = (monthsNumber = 3) => {
	const currentMonthIndex = new Date().getMonth() //9

	const endIntervalIndex = (currentMonthIndex + monthsNumber) //12

	// if it is beyond december, let's get the remaining number after december. If it is just one then we subtract by 1
	// because the firstMonth index is 0.
	const remaining = (endIntervalIndex > 11) ? ((endIntervalIndex - 11) - 1) : null

	if (!remaining) return getMonths().slice(currentMonthIndex, endIntervalIndex)

	const oneYearOld = getMonths().slice(0, remaining).map(({ year, ...rest }) => ({ ...rest, year: year + 1 }))
	
	return [...getMonths().slice(currentMonthIndex), ...oneYearOld]
}