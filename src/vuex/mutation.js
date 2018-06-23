import * as types from './mutation-types'

export default {
  [types.SUB_CART_PANEL] (state, { subCartPanel }) {
    state.subCartPanel = subCartPanel
  }
}
