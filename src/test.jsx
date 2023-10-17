//const url = `https:/${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/data/wow/pvp-region/${rgn}/pvp-season/8/pvp-leaderboard/${brkt}?namespace=dynamic-classic-${rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=USdMU7LUIww4nmQtWUscxE65nv0kCMjsTY`
const url = `https:/us.api.blizzard.com/data/wow/pvp-region/1/pvp-season/8/pvp-leaderboard/2v2?namespace=dynamic-classic-us&locale=en_US&access_token=USdMU7LUIww4nmQtWUscxE65nv0kCMjsTY`
const arenaResults = await fetch(url)
const jsonData = await arenaResults.json()

console.log(jsonData)




