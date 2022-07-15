import { defineStore, acceptHMRUpdate } from 'pinia'

export const useGlobalStore = defineStore(
	'globalStore',
	() => {
		{
			const state = reactive({
				screenWidth: 1700
			})

			return { ...toRefs(state) }
		}
	},
	{ persist: false }
)

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
