import { Api } from "api"
import { AxiosResponse } from "axios"
import { IBrother } from "types/brothers"

type GetAllBrothers = () => Promise<IBrother[]>

export const getAllBrother: GetAllBrothers = async () => {
    try {
			const response: AxiosResponse<IBrother[]> = await Api.get('brothers/')
			return response.data

    } catch (error) {
        throw error
    }
}