import { useQuery } from '@tanstack/react-query'
import steamService from '../services/steam.service'

export const useRecentlyGames = (steamId, count) => {
	return useQuery(
		['recentlyGames', steamId],
		() => steamService.getRecentlyGames(steamId, count),
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
