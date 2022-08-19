import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  axios: {
		//baseUrl: 'https://localhost:5001',
		proxy: true
	},
	proxy: {
		'/api': {
			changeOrigin: true,
			target: 'https://cafepresswebapi-stage.cafepress.com',
			pathRewrite: {
				'^/api': '/api'
			},
			secure: false
		}
	},
	modules: ['@nuxtjs-alt/axios', '@nuxtjs-alt/proxy']
})
