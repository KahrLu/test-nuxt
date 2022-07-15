import { createNuxtPersistedState } from 'pinia-plugin-persistedstate'
import { defineNuxtPlugin, useCookie } from '#app'
import { registerStore } from '../stores'

export default defineNuxtPlugin((nuxtApp) => {
	// register pinia stores
	registerStore()

	nuxtApp.$pinia.use(createNuxtPersistedState(useCookie))
})