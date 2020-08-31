import axios from 'axios'
import {
  GET_PORTFOLIO,
  ADD_PORTFOLIO,
  REMOVE_PORTFOLIO,
  GET_STOCKS,
} from './types'

import {
  clean,
  assetExtractor,
  port1Extractor,
  port2Extractor,
  port3Extractor,
} from '../utils/formUtils'

export const getPortfolio = () => async (dispatch) => {
  const res = await axios.get('/api/v1/portfolios')

  dispatch({
    type: GET_PORTFOLIO,
    payload: res.data,
  })
}

// Data Preprocessing
export const temp = (
  formData,
  portfolioData,
  percentage1,
  percentage2,
  percentage3
) => async (dispatch) => {
  dispatch({
    type: REMOVE_PORTFOLIO,
  })
  const { startYear, endYear, initialAmount } = formData
  const pairObj = {
    '051900': 'LG생활건강',
    '035420': 'NAVER',
    '000660': 'SK하이닉스',
    '028260': '삼성물산',
    '005930': '삼성전자',
    '068270': '셀트리온',
    '096530': '씨젠',
    '035720': '카카오',
    '003480': '한진중공업홀딩스',
    '005380': '현대차',
  }

  clean(portfolioData)

  const assetList = assetExtractor(portfolioData)

  const assetPercentage1 = port1Extractor(percentage1.percentage1)
  const assetPercentage2 = port2Extractor(percentage2.percentage2)
  const assetPercentage3 = port3Extractor(percentage3.percentage3)

  const startDateObj = {
    '051900': '2001-04-01',
    '035420': '2002-11-01',
    '000660': '1996-12-01',
    '028260': '2014-12-01',
    '005930': '1996-10-01',
    '068270': '2005-07-01',
    '096530': '2010-09-01',
    '035720': '1999-11-01',
    '003480': '1996-10-01',
    '005380': '1996-10-01',
  }

  const getStartDate = (startDateObj, assetList) => {
    const assets = Object.values(assetList)
    const extractDateList = []
    assets.map((asset) => {
      for (let key in startDateObj) {
        if (key === asset) {
          const data = { date: startDateObj[asset], asset }
          extractDateList.push(data)
        }
      }
    })

    const mostRecentDate = new Date(
      Math.max.apply(
        null,
        extractDateList.map((e) => {
          return new Date(e.date)
        })
      )
    )
    const mostRecentObject = extractDateList.filter((e) => {
      const d = new Date(e.date)
      return d.getTime() == mostRecentDate.getTime()
    })[0]
    return mostRecentObject
  }

  const mostRecentObject = getStartDate(startDateObj, assetList)
  const trimmedStartDate = new Date(mostRecentObject.date).getFullYear() + 1

  const aggregate = {
    id: 920102,
    trimmedOf: mostRecentObject.asset,
    startYear: trimmedStartDate,
    endYear,
    initialAmount,
  }
  const start = aggregate.startYear + '-01-01'
  let end = ''
  if (endYear === '2020') {
    end = endYear + '-07-31'
  } else {
    end = endYear + '-12-31'
  }

  const portfolio1Wrapper = {
    portfolioName: 'Portfolio1',
    portfolio: [],
  }
  const portfolio2Wrapper = {
    portfolioName: 'Portfolio2',
    portfolio: [],
  }

  const portfolio3Wrapper = {
    portfolioName: 'Portfolio3',
    portfolio: [],
  }

  for (let i = 0; i < assetList.length; i++) {
    const res = await axios.get(
      `/api/v1/stocks/${assetList[i]}/${start}/${end}`
    )
    const data = await res.data.data
    const item1 = {
      asset: assetList[i],
      name: pairObj[assetList[i]],
      assetPercentage: assetPercentage1[i],
      intervalPrice: data,
    }
    portfolio1Wrapper.portfolio.push(item1)
    const item2 = {
      asset: assetList[i],
      name: pairObj[assetList[i]],
      assetPercentage: assetPercentage2[i],
      intervalPrice: data,
    }
    portfolio2Wrapper.portfolio.push(item2)
    const item3 = {
      asset: assetList[i],
      name: pairObj[assetList[i]],
      assetPercentage: assetPercentage3[i],
      intervalPrice: data,
    }
    portfolio3Wrapper.portfolio.push(item3)
  }
  const tempWrapper = [portfolio1Wrapper, portfolio2Wrapper, portfolio3Wrapper]
  aggregate['portfolioWrapper'] = tempWrapper

  // dispatch({
  //   type: REMOVE_PORTFOLIO,
  // })

  dispatch({
    type: ADD_PORTFOLIO,
    payload: aggregate,
  })
}

export const addPortfolio = (formData, portfolioData) => async (dispatch) => {
  const { startYear, endYear, initialAmount } = formData

  const {
    asset1,
    asset2,
    asset3,
    asset4,
    asset5,
    asset6,
    asset7,
    asset8,
    asset9,
    asset10,
    assetPercentage1_1,
    assetPercentage1_2,
    assetPercentage1_3,
    assetPercentage1_4,
    assetPercentage1_5,
    assetPercentage1_6,
    assetPercentage1_7,
    assetPercentage1_8,
    assetPercentage1_9,
    assetPercentage1_10,
    assetPercentage2_1,
    assetPercentage2_2,
    assetPercentage2_3,
    assetPercentage2_4,
    assetPercentage2_5,
    assetPercentage2_6,
    assetPercentage2_7,
    assetPercentage2_8,
    assetPercentage2_9,
    assetPercentage2_10,
    assetPercentage3_1,
    assetPercentage3_2,
    assetPercentage3_3,
    assetPercentage3_4,
    assetPercentage3_5,
    assetPercentage3_6,
    assetPercentage3_7,
    assetPercentage3_8,
    assetPercentage3_9,
    assetPercentage3_10,
  } = portfolioData

  // const assetList = assetExtractor(portfolioData)
  // const port1List = port1Extractor(portfolioData)
  // const port2List = port2Extractor(portfolioData)
  // const port3List = port3Extractor(portfolioData)

  // const firstPortfolio = {
  //   assetList,
  //   port1List,
  // }
  // const secondPortfolio = {
  //   assetList,
  //   port2List,
  // }
  // const thirdPortfolio = {
  //   assetList,
  //   port3List,
  // }

  // const res = await axios.get(`/api/v1/stocks/005930/2015-10-01/2015-12-31`)
  // const data = res.data

  const portfolios = {
    // temp: data,
    id: 1,
    startYear,
    endYear,
    initialAmount,
    portfolioData: [
      {
        portfolioName: 'Portfolio1',
        asset1,
        asset2,
        asset3,
        asset4,
        asset5,
        asset6,
        asset7,
        asset8,
        asset9,
        asset10,
        assetPercentage1: assetPercentage1_1,
        assetPercentage2: assetPercentage1_2,
        assetPercentage3: assetPercentage1_3,
        assetPercentage4: assetPercentage1_4,
        assetPercentage5: assetPercentage1_5,
        assetPercentage6: assetPercentage1_6,
        assetPercentage7: assetPercentage1_7,
        assetPercentage8: assetPercentage1_8,
        assetPercentage9: assetPercentage1_9,
        assetPercentage10: assetPercentage1_10,
      },
      {
        portfolioName: 'Portfolio2',
        asset1,
        asset2,
        asset3,
        asset4,
        asset5,
        asset6,
        asset7,
        asset8,
        asset9,
        asset10,
        assetPercentage1: assetPercentage2_1,
        assetPercentage2: assetPercentage2_2,
        assetPercentage3: assetPercentage2_3,
        assetPercentage4: assetPercentage2_4,
        assetPercentage5: assetPercentage2_5,
        assetPercentage6: assetPercentage2_6,
        assetPercentage7: assetPercentage2_7,
        assetPercentage8: assetPercentage2_8,
        assetPercentage9: assetPercentage2_9,
        assetPercentage10: assetPercentage2_10,
      },
      {
        portfolioName: 'Portfolio3',
        asset1,
        asset2,
        asset3,
        asset4,
        asset5,
        asset6,
        asset7,
        asset8,
        asset9,
        asset10,
        assetPercentage1: assetPercentage3_1,
        assetPercentage2: assetPercentage3_2,
        assetPercentage3: assetPercentage3_3,
        assetPercentage4: assetPercentage3_4,
        assetPercentage5: assetPercentage3_5,
        assetPercentage6: assetPercentage3_6,
        assetPercentage7: assetPercentage3_7,
        assetPercentage8: assetPercentage3_8,
        assetPercentage9: assetPercentage3_9,
        assetPercentage10: assetPercentage3_10,
      },
    ],
  }

  // const res = await fetch('/portfolios', {
  //   method: 'POST',
  //   body: JSON.stringify(portfolios),
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  // })

  // const data = await res.json()
  dispatch({
    type: REMOVE_PORTFOLIO,
  })
  dispatch({
    type: ADD_PORTFOLIO,
    payload: portfolios,
  })
}

export const getStocks = (portfolioObj) => async (dispatch) => {
  const start_1 = portfolioObj[0].startYear + '-01-01'
  const start_2 = portfolioObj[0].startYear + '-01-31'
  let end_1 = ''
  let end_2 = ''
  if (portfolioObj[0].endYear === '2020') {
    end_1 = portfolioObj[0].endYear + '-07-01'
    end_2 = portfolioObj[0].endYear + '-07-31'
  } else {
    end_1 = portfolioObj[0].endYear + '-12-01'
    end_2 = portfolioObj[0].endYear + '-12-31'
  }

  const assetList = portfolioObj.map((item) => {
    return item.asset
  })

  const result_list = []
  for (let i = 0; i < assetList.length; i++) {
    const res_start = await axios.get(
      `/api/v1/stocks/${assetList[i]}/${start_1}/${start_2}`
    )
    const res_end = await axios.get(
      `/api/v1/stocks/${assetList[i]}/${end_1}/${end_2}`
    )

    const obj = {
      start: res_start.data[0],
      end: res_end.data[0],
    }
    result_list.push(obj)
  }

  dispatch({
    type: GET_STOCKS,
    payload: result_list,
  })
}
