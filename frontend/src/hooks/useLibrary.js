import { useQuery } from '@tanstack/react-query'
import steamService from '../services/steam.service'

export const useLibrary = steamId => {
	return useQuery(
		['library', steamId],
		() => steamService.getLibrary(steamId),
		{
			select: ({ data }) => {
				if (data.error) {
					return {
						error: data.error,
					}
				}
				return data
			},
			enabled: !!steamId,
		}
	)
}
