const apiKey = process.env.REACT_APP_WOW_API_KEY
let memo = {}

export async function fetchData(brkt, rgn) {
    const url = buildApiURL(rgn, `/data/wow/pvp-region/${rgn}/pvp-season/8/pvp-leaderboard/${brkt}`,'dynamic-classic')
    return fetchAndParse(url)
  }

export async function fetchSpec(charName, server, rgn) {
    const url = buildApiURL(rgn, `/profile/wow/character/${server}/${charName.toLowerCase()}/specializations`,`profile-classic`)
    return fetchAndParse(url)
}

export async function fetchGear(charName, server, rgn) {
    const url = buildApiURL(rgn, `/profile/wow/character/${server}/${charName.toLowerCase()}/equipment`,`profile-classic`)
    return fetchAndParse(url)
}

export async function fetchItemData(itemId) {
    const url = buildApiURL(1,`/data/wow/item/${itemId}`,`static-3.4.3_51505-classic`)
    return fetch(url)
}

export async function fetchGearIcon(itemId, rgn) {
    const url = buildApiURL(rgn,`/data/wow/media/item/${itemId}`, `static-3.4.3_51505-classic`)
    return fetchAndParse(url)
}

export async function fetchAvatar(charName, server, rgn) {
    const url = buildApiURL(rgn, `/profile/wow/character/${server}/${charName.toLowerCase()}/character-media`, `profile-classic`)
    return fetchAndParse(url)
}

export async function fetchCharSummary(charName, server, rgn) {
    const url = buildApiURL(rgn, `/profile/wow/character/${server}/${charName.toLowerCase()}`, `profile-classic` )
    return fetchAndParse(url)
}

export async function fetchCharStats(charName, server, rgn) {
    const url = buildApiURL(rgn, `/profile/wow/character/${server}/${charName.toLowerCase()}/statistics`, `profile-classic`)
    return fetchAndParse(url)
}

export async function fetchCharStatistics(charName, server, rgn) {
    const url = buildApiURL(rgn, `/profile/wow/character/${server}/${charName.toLowerCase()}/achievements/statistics`, `profile-classic`)
    return fetchAndParse(url)
}

export async function fetchPvpStats(charName, server, rgn) {
    let url1 = buildApiURL(rgn, `/profile/wow/character/${server}/${charName.toLowerCase()}/pvp-bracket/2v2`,`profile-classic`)
    let url2 = buildApiURL(rgn, `/profile/wow/character/${server}/${charName.toLowerCase()}/pvp-bracket/3v3`,`profile-classic`)
    let url3 = buildApiURL(rgn, `/profile/wow/character/${server}/${charName.toLowerCase()}/pvp-bracket/5v5`,`profile-classic`)
    let data = await Promise.all([fetch(url1), fetch(url2), fetch(url3)])
    let result = []
    for (let i = 0; i < data.length; i++ ) {
        let tempData = await data[i].json()
        result = [...result,tempData]
    }
    return result
}

export async function fetchTokenPrice() {
    let usTokenUrl = buildApiURL(`1`, `/data/wow/token/index`,`dynamic-classic`)
    let euTokenUrl = buildApiURL(`0`, `/data/wow/token/index`,`dynamic-classic`)
    let data = await Promise.all([fetch(usTokenUrl), fetch(euTokenUrl)])
    let result = []
    for (let i = 0; i < data.length; i++ ) {
        let tempData = await data[i].json()
        result = [...result,tempData]
    }
    return result
}

export async function fetchAndParse(url) {
    if (memo[url]) {
        return memo[url]
    }
    const results = await fetch(url)
    memo[url] = await results.json()
    return memo[url]
}

export function buildApiURL(rgn, path, namespace) {
    let regionStr =  rgn === '1' ? 'us' : 'eu'
    return `https:/${regionStr}.api.blizzard.com${path}?namespace=${namespace}-${regionStr}&locale=en_US&access_token=${apiKey}`
}