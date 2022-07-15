import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	css: ['@/assets/scss/index.scss'],
	build: {
		transpile: ['vueuc'] // fix dev error: Cannot find module 'vueuc'
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/assets/scss/variable.scss";`
				}
			}
		}
	},
	buildModules: ['@pinia/nuxt']
})
