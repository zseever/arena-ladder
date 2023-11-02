export function createLayout(item, icon, orientation) {
    if (item) {
        let urlSearch = '&'
        let gems = []
        let itemEnchant;
        if (item.enchants) {
            for (let i=0; i < item.enchants.length; i++) {
                if (item.enchants[i].display_string && item.enchants[i].display_string.split(' ')[0] === 'Enchanted:') {
                    itemEnchant = item.enchants[i]
                } else if (item.enchants[i]?.enchantment_slot?.id < 5) {
                    let tempGem = item.enchants[i].source_item.id && {displayStr: item.enchants[i].display_string, id: item.enchants[i].source_item.id}
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
                        <div className={`${item.quality.toLowerCase()}`}>{item.name}</div> 
                        <div className="ilvl-display-right"><span className="enchant-text-right">{itemEnchant?.display_string ?? ''}</span><span>{item.itemLevel}</span></div>
                        <div>
                            {gems.length ? 
                                gems.map(gem => <a href={`https://www.wowhead.com/wotlk/item=${gem.id}`}><img className="gem-img" src="/gems/amber.jpg"></img></a>)
                                :
                                ''
                            }
                        </div>
                    </div>
                    <a href={`https://www.wowhead.com/wotlk/item=${item.id}${urlSearch}`}>
                    <div className={`${item.quality.toLowerCase()} item-icon`}>
                        <img src={icon}></img>
                    </div>  
                    </a>
                </>
            )
        } else if (orientation === 'left' || item.slot === 'OFF_HAND') {
            return (
                <>
                    <a href={`https://www.wowhead.com/wotlk/item=${item.id}${urlSearch}`}>
                    <div className={`${item.quality.toLowerCase()} item-icon`}>
                        <img src={icon}></img>
                    </div> 
                    </a> 
                    <div className="item-detail-cont-left">
                        <div className={`${item.quality.toLowerCase()}`}>{item.name}</div>   
                        <div className="ilvl-display-left"><span>{item.itemLevel}</span><span className="enchant-text-left">{itemEnchant?.display_string ?? ''}</span></div>
                        <div>
                            {gems.length ? 
                                gems.map(gem => <a href={`https://www.wowhead.com/wotlk/item=${gem.id}`}><img className="gem-img" src="/gems/amber.jpg"></img></a>)
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