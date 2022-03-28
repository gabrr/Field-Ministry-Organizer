export const formatDate = (date: Date) => {
	return date.toLocaleDateString('pt', {
		month: 'numeric',
		day: 'numeric',
		weekday: 'long',
	}) + ' às 9:00'
}