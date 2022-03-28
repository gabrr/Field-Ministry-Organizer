import { createContext, useEffect, useState } from "react";
import { getAllBrother } from "services/users";
import { IBrother } from "types/brothers";

interface UsersContextProps {
	users: IBrother[]
	loading: boolean
	error: boolean
	getAllUsers: () => Promise<void>
}

export const UsersContext = createContext<UsersContextProps>(null!)

export const UsersProvider: React.FC = ({ children }) => {
	const [users, setusers] = useState<UsersContextProps['users']>([])
	const [loading, setloading] = useState<UsersContextProps['loading']>(true)
	const [error, seterror] = useState<UsersContextProps['error']>(false)

	const getAllUsers = async () => {
		setloading(true)
		seterror(false)
		return getAllBrother()
			.then(data => setusers(data))
			.catch(error => {
				console.error(error)
				seterror(true)
			})
			.finally(() => {
				setloading(false)
			})
	}

	const value = {
		users,
		loading,
		error,
		getAllUsers
	}

	return (
		<UsersContext.Provider value={value}>
			{children}
		</UsersContext.Provider>
	)
}