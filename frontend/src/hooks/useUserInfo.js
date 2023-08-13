import { useQuery } from '@tanstack/react-query'
import steamService from '../services/steam.service'

export const useUserInfo = steamId => {
	return useQuery(
		['userInfo', steamId],
		() => steamService.getUserInfo(steamId),
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
