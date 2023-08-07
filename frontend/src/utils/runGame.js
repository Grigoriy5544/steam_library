export const runGame = appid => {
	if (
		!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		window.open(`steam://rungame/${appid}/76561202255233023/`, '_blank')
	}
}
