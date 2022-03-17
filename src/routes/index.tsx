import { Home, AppointmentsList } from "pages";
import { Routes, Route, Link } from "react-router-dom";

const routes = [
	{ title: 'Meses', Page: Home, path: '/', index: true },
	{ title: 'Meses', Page: Home, path: '/appointments', index: true },
	{ title: 'Designacões', Page: AppointmentsList, path: '/appointments/:month/:year', index: false },
]

export const AppRoutes: React.FC = () => {

	return (
		<Routes>
			{routes.map(({ Page, title, ...rest }) => {
				return <Route key={title} {...rest} element={<Page />} />
			})}
		</Routes>
	)
}