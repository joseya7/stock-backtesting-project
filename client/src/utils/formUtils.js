//thousand comma separator
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
//Best decimal adjustor
export const placeDecimalPoint = (value, decimalPlaces) => {
  return Number(
    Math.round(parseFloat(value + 'e' + decimalPlaces)) + 'e-' + decimalPlaces
  )
}

export const assetExtractor = (obj) => {
  const extractList = []
  for (var key in obj) {
    if (/asset\d/g.test(key)) {
      extractList.push(obj[key])
    }
  }
  return extractList
}

export const portExtractor = (obj) => {
  const extractList = []
  for (var key in obj) {
    if (/assetPercentage\d/g.test(key)) {
      extractList.push(obj[key])
    }
  }
  return extractList
}

export const port1Extractor = (obj) => {
  const extractList = []
  for (var key in obj) {
    if (/assetPercentage1_\d/g.test(key)) {
      extractList.push(obj[key])
    }
  }
  return extractList
}

export const port2Extractor = (obj) => {
  const extractList = []
  for (var key in obj) {
    if (/assetPercentage2_\d/g.test(key)) {
      extractList.push(obj[key])
    }
  }
  return extractList
}

export const port3Extractor = (obj) => {
  const extractList = []
  for (var key in obj) {
    if (/assetPercentage3_\d/g.test(key)) {
      extractList.push(obj[key])
    }
  }
  return extractList
}

export const clean2 = (arr1, arr2, pairObj) => {
  const resultList = []
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      const data = {
        asset: arr1[i],
        name: pairObj[arr1[i]],
        assetPercentage: arr2[i],
      }
      resultList.push(data)
    }
  }
  return resultList
}

export const clean = (obj) => {
  for (let propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ''
    ) {
      delete obj[propName]
    }
  }
}

export const dataMassage = (portfolio, tickerNameObj) => {
  clean(portfolio)
  const assetList = assetExtractor(portfolio)
  const portList = portExtractor(portfolio)
  const myList = clean2(assetList, portList, tickerNameObj)
  return myList
}

export const chartDataConverter = (tableData) => {
  const nameList = tableData.map((data) => data.name)
  const percentageList = tableData.map((data) => data.assetPercentage)

  const data = {
    labels: nameList,
    datasets: [
      {
        data: percentageList,
        backgroundColor: [
          '#FF4136',
          '#2ECC40',
          '#0074D9',
          '#85144b',
          '#01FF70',
          '#7FDBFF',
          '#FF851B',
          '#3D9970',
          '#001f3f',
          '#DDDDDD',
        ],
        hoverBackgroundColor: [
          '#FF4136',
          '#2ECC40',
          '#0074D9',
          '#85144b',
          '#01FF70',
          '#7FDBFF',
          '#FF851B',
          '#3D9970',
          '#001f3f',
          '#DDDDDD',
        ],
      },
    ],
  }
  return data
}

export const formDataInsertor = (
  portfolioData,
  startYear,
  endYear,
  initialAmount
) => {
  for (let i = 0; i < portfolioData.length; i++) {
    portfolioData[i]['startYear'] = startYear
    portfolioData[i]['endYear'] = endYear
    portfolioData[i]['initialAmount'] = initialAmount
  }
  return portfolioData
}

export const assetDivider = (arr1, arr2, startYear, endYear, initialAmount) => {
  const resultList = []
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      const data = {
        asset: arr1[i],
        assetPercentage: arr2[i],
        startYear,
        endYear,
        initialAmount,
      }
      resultList.push(data)
    }
  }
  return resultList
}

export const returnDataMassage = (obj, startYear, endYear, initialAmount) => {
  const assertList = assetExtractor(obj)
  const portList = portExtractor(obj)
  const resultList = assetDivider(
    assertList,
    portList,
    startYear,
    endYear,
    initialAmount
  )
  return resultList
}
