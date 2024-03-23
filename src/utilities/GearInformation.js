import * as WoWAPI from './WoWAPI'
let memo = {}

export async function getGearInformation(name,server,region, gameVersion) {
    let key = `${name}-${server}-${region}`
    if (memo.key) {
        return memo.key
    }
    const gearLookup = {}
    const itemLocation = {}
    const promises = []
    let result = []
    const gearData = await WoWAPI.fetchGear(name, server, region, gameVersion)
    gearData.equipped_items.forEach(item => { 
        gearLookup[item.slot.type] = {name: item.name, slot: item.slot.type, id: item.media.id, enchants: item.enchantments, quality: item.quality.type}
        promises.push(WoWAPI.fetchItemData(item.media.id, gameVersion))
    })
    const data = await Promise.all(promises)
    for (let i=0; i < data.length; i++) {
        let temp = await data[i].json()
        result = [...result, temp]
    }
    for (const property in gearLookup) {
        itemLocation[gearLookup[property].id] = property 
    }
    result.forEach(res=> {
        if (itemLocation[res.id]) {
            gearLookup[itemLocation[res.id]].itemLevel = res.level
        }
    })
    memo[key] = gearLookup
    return memo[key]
}