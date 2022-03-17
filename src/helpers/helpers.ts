import { groups } from "mocks/groups"

export const findGroup = (name: string) => {
	let result = ''
	Object.entries(groups).forEach(([groupName, namesList]) => {
		if (RegExp(name, "gi").test(namesList.join(" , "))) result = groupName
	})
	return result
}

export const parseGroupsNames = (groupsNames: string[]) => {
	if (!(groupsNames instanceof Array)) return ""
	if (!groupsNames) return ""

	return groupsNames.reduce((prev, current, currentIndex, array) => {
		const lastIndex = (array.length - 1)
		return `${prev}${currentIndex === lastIndex ? ' e ' : ', '}${current}`
	}) + '.'
}

export const getMonthName = (index: number) => {
	const monthName = new Date(0, index).toLocaleString('pt', { month: 'long' })
	return monthName.replace(monthName[0], monthName[0].toUpperCase())
}

export const getMonths = (number = 12) => [...Array(number)].map((_, key) => {
	const month = { name: '', year: 0, index: 0 }
	month.index = key
	month.year = new Date().getFullYear()
	month.name = getMonthName(key)
	return month
})