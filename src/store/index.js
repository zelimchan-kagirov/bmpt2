import { createStore } from 'vuex'

import { trainers } from './trainers'

export default createStore({
  modules: {
    trainers,
  }
})
