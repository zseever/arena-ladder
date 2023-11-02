import * as WoWAPI from './WoWAPI'

export async function getGearInformation(name,server,region) {
    const gearLookup = {}
    const itemLocation = {}
    const promises = []
    let result = []
    const gearData = await WoWAPI.fetchGear(name, server, region)
    gearData.equipped_items.forEach(item => { 
        gearLookup[item.slot.type] = {name: item.name, slot: item.slot.type, id: item.media.id, enchants: item.enchantments, quality: item.quality.type}
        promises.push(WoWAPI.fetchItemData(item.media.id))
    })
    const data = await Promise.all(promises)
    data.forEach((data) => {
        result = [...result, data]
    })
    for (const property in gearLookup) {
        itemLocation[gearLookup[property].id] = property 
    }
    result.forEach(res=> {
        gearLookup[itemLocation[res.id]].itemLevel = res.level
    })
    return gearLookup
}