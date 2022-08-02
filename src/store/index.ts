import { createPinia, Store } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { klona } from 'klona'

const resetStore = ({ store }: { store: Store }) => {
  const initialState = klona(store.$state)
  store.$reset = () => store.$patch(klona(initialState))
}

const pinia = createPinia()
pinia.use(resetStore)
pinia.use(piniaPluginPersistedstate)

export default pinia
