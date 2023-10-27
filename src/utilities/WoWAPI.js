const apiKey = 'USH4fllFR6e8Dcmr7ugAQIB9b2oZSVAjl2'

export async function fetchData(brkt, rgn) {
    const url = `https:/${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/data/wow/pvp-region/${rgn}/pvp-season/8/pvp-leaderboard/${brkt}?namespace=dynamic-classic-${rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=${apiKey}`
    const arenaResults = await fetch(url)
    const jsonData = await arenaResults.json()
    return jsonData.entries
  }

export async function fetchSpec(charName, server, rgn) {
    const url = `https://${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/profile/wow/character/${server}/${charName.toLowerCase()}/specializations?namespace=profile-classic-${ rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=${apiKey}`
    const charResults = await fetch(url)
    const jsonData = await charResults.json()
    return jsonData
}

export async function fetchGear(charName, server, rgn) {
    const url = `https://${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/profile/wow/character/${server}/${charName.toLowerCase()}/equipment?namespace=profile-classic-${ rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=${apiKey}`
    const charResults = await fetch(url)
    const jsonData = await charResults.json()
    return jsonData
}

export async function fetchGearIcon(itemId, rgn) {
    const url = `https://${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/data/wow/media/item/${itemId}?namespace=static-3.4.3_51505-classic-${ rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=${apiKey}`
    const charResults = await fetch(url)
    const jsonData = await charResults.json()
    return jsonData
}

export async function fetchAvatar(charName, server, rgn) {
    const url = `https://${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/profile/wow/character/${server}/${charName.toLowerCase()}/character-media?namespace=profile-classic-${ rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=${apiKey}`
    const charResults = await fetch(url)
    const jsonData = await charResults.json()
    if (jsonData) {
        return jsonData
    }
}

export async function fetchDataNew(dataType, region,) {

}

export function buildApiURL(dataType, region,) {

}