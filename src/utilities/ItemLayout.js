const gemSrc = {
    'amber': true,
    'zul':true,
    'eye':true,
    'ametrine':true,
    'ruby': true,
    'tear':true,
    'zircon':true,
    'dreadstone':true,
    'diamond':true,
}

export function createLayout(item, icon, orientation, gameVersion) {
    console.log(item)
    if (item) {
        let urlSearch = '&'
        let gems = []
        let itemEnchant;
        if (item.enchants) {
            for (let i=0; i < item.enchants.length; i++) {
                if (item.enchants[i].display_string && item.enchants[i].display_string.split(' ')[0] === 'Enchanted:') {
                    itemEnchant = item.enchants[i]
                } else if (item.enchants[i]?.enchantment_slot?.id < 5 && item.enchants[i]?.enchantment_slot.type !== 'TEMPORARY') {
                    let tempGem = item.enchants[i]?.source_item?.id && {displayStr: item.enchants[i].display_string, id: item.enchants[i].source_item.id, name: item.enchants[i].source_item.name}
                    gems.push(tempGem)
                }
            }
            let gemStr = ''
            gems.forEach(gem => {
                if (gemStr === '') {
                    gemStr = `gems=${gem.id}`
                } else {
                    gemStr += `:${gem.id}`
                }
            })
            let enchStr = itemEnchant ? `ench=${itemEnchant.enchantment_id}` : ''
            urlSearch = gemStr !== '' ? urlSearch+gemStr : urlSearch
            urlSearch = enchStr !== '' ? urlSearch+'&'+enchStr : urlSearch
        }

        if (orientation === 'right' || item.slot === 'MAIN_HAND' || item.slot === 'RANGED') {
            return (
                <>
                    <div className="item-detail-cont-right">
                        <div className={`${item.quality.toLowerCase()}`}>{item.slot === 'MAIN_HAND' || item.slot === 'RANGED' ? item.name.slice(0,32)+ (item.name.length > 32 ? '..': '') : item.name}</div> 
                        <div className="ilvl-display-right"><span className="enchant-text-right">{itemEnchant?.display_string ?? ''}</span><span>{item.itemLevel}</span></div>
                        <div>
                            {gems.length ? 
                                gems.map(gem => <a href={`https://www.wowhead.com/wotlk/item=${gem.id}`}><img className="gem-img" alt='gear-gem' src={`/gems/${gemSrc[gem.name.split(' ').slice(-1)[0].toLowerCase()] ? gem.name.split(' ').slice(-1)[0] : 'amber'}.jpg`}></img></a>)
                                :
                                ''
                            }
                        </div>
                    </div>
                    {/* <a href={`https://www.wowhead.com/wotlk/item=${item.id}${urlSearch}`}> */}
                    <a href={`https://www.wowhead.com/${gameVersion === 'sod' ? 'classic' : 'wotlk'}/item=${item.id}${urlSearch}`}>
                    <div className={`${item.quality.toLowerCase()} item-icon`}>
                        <img alt={`${item.slot}-icon`} src={icon}></img>
                    </div>  
                    </a>
                </>
            )
        } else if (orientation === 'left' || item.slot === 'OFF_HAND') {
            return (
                <>
                    {/* <a href={`https://www.wowhead.com/wotlk/item=${item.id}${urlSearch}`}> */}
                    <a href={`https://www.wowhead.com/${gameVersion === 'sod' ? 'classic' : 'wotlk'}/item=${item.id}${urlSearch}`}>
                    <div className={`${item.quality.toLowerCase()} item-icon`}>
                        <img alt={`${item.slot}-icon`} src={icon}></img>
                    </div> 
                    </a> 
                    <div className="item-detail-cont-left">
                        <div className={`${item.quality.toLowerCase()}`}>{item.slot === 'OFF_HAND' ? item.name.slice(0,32)+ (item.name.length > 32 ? '..': '') : item.name}</div>   
                        <div className="ilvl-display-left"><span>{item.itemLevel}</span><span className="enchant-text-left">{itemEnchant?.display_string ?? ''}</span></div>
                        <div>
                            {gems.length ? 
                                gems.map(gem => <a href={`https://www.wowhead.com/wotlk/item=${gem.id}`}><img className="gem-img" alt="gear-gem" src={`/gems/${gemSrc[gem.name.split(' ').slice(-1)[0].toLowerCase()] ? gem.name.split(' ').slice(-1)[0] : 'amber'}.jpg`}></img></a>)
                                :
                                ''
                            }
                        </div>
                    </div>
                </>
            )
        }
    }
}