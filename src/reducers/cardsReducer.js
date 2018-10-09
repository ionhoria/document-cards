import { FETCH_CARDS } from '../actions/types'

export default (cards = [], action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return action.payload
    default:
      return cards
  }
}
