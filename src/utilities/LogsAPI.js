export async function fetchLogs(name, server, region) {
    let regionSlug = (region === '1') ? 'us' : 'eu'
    const results = await fetch(`https://classic.warcraftlogs.com:443/v1/parses/character/${name.toLowerCase()}/${server.toLowerCase()}/${regionSlug}?timeframe=historical&api_key=${process.env.REACT_APP_WCL_API_KEY}`)
    let parseData = await results.json()
    return formatLogData(parseData)
}

function formatLogData(logData) {
    let bestParses = {}
    logData.forEach(parse => {
        let boss = parse.encounterName
        if ((!bestParses[boss] || bestParses[boss].percentile < parse.percentile) && parse.size === 25) {
            bestParses[boss] = {
                percentile: parse.percentile,
                report: parse.reportID,
                dps: parse.total,
                bossName: boss,
                difficulty: parse.difficulty,
                spec: parse.spec
            }
        }
    })
    let bestParseArr = []
    for (const prop in bestParses) {
        bestParseArr.push(bestParses[prop])
    }
    return bestParseArr
} 