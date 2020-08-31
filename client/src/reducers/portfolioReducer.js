import {
  GET_PORTFOLIO,
  ADD_PORTFOLIO,
  REMOVE_PORTFOLIO,
  GET_STOCKS,
} from '../actions/types'

const initialState = {
  portfolios: {},
  loading: true,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PORTFOLIO:
      return {
        ...state,
        portfolios: action.payload,
        loading: null,
      }
    case GET_PORTFOLIO:
      return {
        ...state,
        portfolios: action.payload,
        loading: null,
      }
    case REMOVE_PORTFOLIO:
      return {
        ...state,
        portfolios: null,
        loading: null,
      }
    case GET_STOCKS:
      return {
        ...state,
        stocks: action.payload,
        loading: null,
      }

    default:
      return state
  }
}
