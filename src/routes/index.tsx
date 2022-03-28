import { Home, AppointmentsList } from "pages";
import { ProvidersCombined } from "providers";
import { Routes, Route } from "react-router-dom";

const routes = [
	{ title: 'Meses', Page: Home, path: '/', index: true },
	{ title: 'Meses', Page: Home, path: '/appointments', index: true },
	{ title: 'Designacões', Page: AppointmentsList, path: '/appointments/:month/:year', index: false },
]

export const AppRoutes: React.FC = () => {

	return (
		<ProvidersCombined>
			<Routes>
					{routes.map(({ Page, title, ...rest }) => {
						return <Route key={title} {...rest} element={<Page />} />
					})}
			</Routes>
		</ProvidersCombined>
	)
}