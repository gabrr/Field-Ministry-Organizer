import { UsersProvider } from "contexts";
import { AppointmentProvider } from "contexts/appointments";
import { ComponentProps } from "react";

const providers = [
	AppointmentProvider,
	UsersProvider,
]

const providersCombiner = (): React.FC => {
	return providers.reduce((AccumulatedProviders, Provider) => {
		return ({ children }: ComponentProps<React.FC>): JSX.Element => {
			return (
				<AccumulatedProviders>
					<Provider>
						{children}
					</Provider>
				</AccumulatedProviders>
			)
		}
	}, ({ children }) => <>{children}</>)
}

export const ProvidersCombined = providersCombiner()