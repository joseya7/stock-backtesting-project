export const portfolioMonthlyBalance = (portfolio, initialAmount) => {
  //item은 각각의 asset
  const yearAggMatrix = portfolio.map((item) => {
    const mList = []
    for (let i = 0; i < item.intervalPrice.length; i++) {
      mList.push(+item.intervalPrice[i].Price)
    }
    const growthList = []
    let price = 0
    let growth = 0
    for (let i = 0; i < mList.length - 1; i++) {
      let weight = +mList[i + 1] / +mList[i]

      if (i === 0) {
        price = +initialAmount * (+item.assetPercentage / 100)
      } else {
        price = growth
      }
      growth = weight * price
      growthList.push(growth)
    }
    return growthList
  })

  //Get sum by each column
  const monthlyBalanceList = []

  for (let i = 0; i < yearAggMatrix[0].length; i++) {
    const sum = getColSum(yearAggMatrix, i).toFixed(2)

    monthlyBalanceList.push(sum)
  }
  return monthlyBalanceList
}

export const placeDecimalPoint = (value, decimalPlaces) => {
  return Number(
    Math.round(parseFloat(value + 'e' + decimalPlaces)) + 'e-' + decimalPlaces
  )
}

export const yearlyGrowthSummary = (monthlyBalanceList, portfolio) => {
  const dateList = []
  portfolio[0].intervalPrice.map((i) => {
    dateList.push(i.Date)
  })
  console.log(portfolio[0].intervalPrice)
  console.log(dateList)
  console.log(monthlyBalanceList)
  const indexList = []
  for (let i = 0; i < dateList.length; i++) {
    if (new Date(dateList[i]).getMonth() === 11) {
      indexList.push(i)
    }
  }
  console.log(indexList)

  const yearlyGrowthRate = []
  for (let i = 1; i < indexList.length; i++) {
    const prev = indexList[i - 1]
    const next = indexList[i]
    console.log(+monthlyBalanceList[next])
    console.log(+monthlyBalanceList[prev])
    console.log(+monthlyBalanceList[next] - +monthlyBalanceList[prev])
    console.log(
      (+monthlyBalanceList[next] - +monthlyBalanceList[prev]) /
        +monthlyBalanceList[prev]
    )

    const growthRate =
      ((+monthlyBalanceList[next] - +monthlyBalanceList[prev]) /
        +monthlyBalanceList[prev]) *
      100
    console.log(growthRate)

    yearlyGrowthRate.push(placeDecimalPoint(growthRate, 2))
  }

  return {
    max: Math.max(...yearlyGrowthRate),
    min: Math.min(...yearlyGrowthRate),
    std: standardDeviation(yearlyGrowthRate).toFixed(2),
    avg: average(yearlyGrowthRate).toFixed(2),
    annualGrowthRate: yearlyGrowthRate,
  }
}

//////////////////////////Important////////////////////////////////

//Final Balance Calculator
export const finalBalanceCalculator = (portfolioWrapper, initialAmount) => {
  const finalBalanceWrapper = portfolioWrapper.map((strategy) => {
    const resultList = []
    const finalBalanceWrapper = []
    strategy.portfolio.map((item) => {
      const weight =
        item.intervalPrice[item.intervalPrice.length - 1].Price /
        item.intervalPrice[0].Price
      const money = (item.assetPercentage / 100) * initialAmount
      const result = weight * money
      resultList.push(result)
    })
    const finalBalance = ~~resultList.reduce((acc, sum) => acc + sum, 0)
    finalBalanceWrapper.push(finalBalance)
    return finalBalanceWrapper
  })

  return finalBalanceWrapper
}

//CAGR Calculator
export const CAGRCalculator = (portfolioWrapper, startYear, endYear) => {
  const CAGRwrapper = portfolioWrapper.map((strategy) => {
    const CAGRList = []
    const CAGRWrapper = []
    strategy.portfolio.map((item) => {
      const firstSide =
        item.intervalPrice[item.intervalPrice.length - 1].Price /
        item.intervalPrice[0].Price
      const exponential = 1 / (+endYear - +startYear)
      const CAGRresult = Math.pow(firstSide, exponential) - 1
      CAGRList.push(CAGRresult)
    })
    const CAGR =
      CAGRList.reduce((sum, value) => sum + value, 0) / CAGRList.length
    CAGRWrapper.push((CAGR * 100).toFixed(2))
    return CAGRWrapper
  })
  return CAGRwrapper
}
//Yearly, Monthly Return,  Std, Avg, Max, Min
export const portfolioDescCalculator = (portfolioWrapper, initialAmount) => {
  const portfolioWrapperDesc = []
  portfolioWrapper.map((portfolio) => {
    const monthlyBalance = portfolioMonthlyBalance(
      portfolio.portfolio,
      initialAmount
    )
    const yearlySummary = yearlyGrowthSummary(
      monthlyBalance,
      portfolio.portfolio
    )
    const obj = {
      monthlyBalance,
      yearlySummary,
    }
    portfolioWrapperDesc.push(obj)
  })
  return portfolioWrapperDesc
}

//////////////////////////////Math//////////////////////////
function standardDeviation(values) {
  var avg = average(values)

  var squareDiffs = values.map(function (value) {
    var diff = +value - avg
    var sqrDiff = diff * diff
    return sqrDiff
  })

  var avgSquareDiff = average(squareDiffs)

  var stdDev = Math.sqrt(avgSquareDiff)
  return stdDev
}

const getColMean = (matrix, col) => {
  var column = []
  for (var i = 0; i < matrix.length; i++) {
    column.push(matrix[i][col])
  }
  const yearAvgMean =
    column.reduce((sum, value) => sum + +value, 0) / column.length

  return yearAvgMean
}

const getColSum = (matrix, col) => {
  var column = []
  for (var i = 0; i < matrix.length; i++) {
    column.push(matrix[i][col])
  }
  const yearSum = column.reduce((sum, value) => sum + +value, 0)

  return yearSum
}

function average(data) {
  var sum = data.reduce(function (sum, value) {
    return sum + +value
  }, 0)

  var avg = sum / data.length
  return avg
}

// export const portfolioSummaryCalculator = (portfolio, initialAmount) => {
//     const yearData = portfolio.map((item) => {
//       //Last month filtering -> object of array
//       //ex : lastMonthList = [{Date:2015-12-01,}, {Date:2016-12-01,}, {Date:2015-17-01,}]
//       const lastMonthList = item.intervalPrice.filter((date) => {
//         return new Date(date.Date).getMonth() === 11
//       })

//       const yearRateList = []

//       for (let i = 1; i < lastMonthList.length; i++) {
//         const growthRate = (
//           ((+lastMonthList[i].Price - +lastMonthList[i - 1].Price) /
//             +lastMonthList[i - 1].Price) *
//           100
//         ).toFixed(2)

//         yearRateList.push(growthRate)
//       }

//       const resultObj = {
//         assetName: lastMonthList[0].Name,
//         Knicker: lastMonthList[0].Knicker,
//         yearRateList,
//       }
//       return resultObj
//     })

//     const yearAggMatrix = []
//     for (let i = 0; i < yearData.length; i++) {
//       yearAggMatrix.push(yearData[i].yearRateList)
//     }

//     const yearAvgList = []

//     for (let i = 0; i < yearAggMatrix[0].length; i++) {
//       const mean = getColMean(yearAggMatrix, i).toFixed(2)

//       yearAvgList.push(mean)
//     }

//     return {
//       max: Math.max(...yearAvgList).toFixed(2),
//       min: Math.min(...yearAvgList).toFixed(2),
//       std: standardDeviation(yearAvgList).toFixed(2),
//       avg: average(yearAvgList).toFixed(2),
//       annualGrowthRate: yearAvgList,
//     }
//   }

// const summaryWrapper = (portfoliosWrapper) => {
//     const sumWrapper = []
//     portfoliosWrapper.map((data) => {
//       const desc = portfolioSummaryCalculator(data.portfolio)
//       sumWrapper.push(desc)
//     })
//     return sumWrapper
//   }

export const getXaxisMonthly = (portfolioWrapper) => {
  const raw = portfolioWrapper[0].portfolio[0].intervalPrice

  let rawDate = raw.map((item) => {
    return item.Date
  })

  rawDate.shift()

  const labels = rawDate.map((item) => {
    const date = new Date(item)
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: '2-digit',
    })
    const [{ value: month }, , { value: year }] = dateTimeFormat.formatToParts(
      date
    )
    return year + '-' + month
  })
  return labels
}

export const getYaxisMonthly = (portfolioWrapper, initialAmount) => {
  const temp2 = portfolioDescCalculator(portfolioWrapper, initialAmount)

  const data1 = Array.from(temp2[0].monthlyBalance, (x) => Math.floor(+x))

  const data2 = Array.from(temp2[1].monthlyBalance, (x) => Math.floor(+x))

  const data3 = Array.from(temp2[2].monthlyBalance, (x) => Math.floor(+x))

  let datasets = [
    {
      label: 'Portfolio1',
      data: data1,
      fill: false,
      lineTension: 0,
      borderColor: '#7B68EE',
    },
    {
      label: 'Portfolio2',
      data: data2,
      fill: false,
      lineTension: 0,
      borderColor: '#FF0000',
    },
    {
      label: 'Portfolio3',
      data: data3,
      fill: false,
      lineTension: 0,
      borderColor: '#FFA500',
    },
  ]

  datasets = datasets.filter((item) => {
    return !isNaN(item.data[0])
  })

  return datasets
}
