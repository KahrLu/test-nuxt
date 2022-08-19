import { defineNuxtPlugin } from '#app'
import 'element-plus/theme-chalk/display.css'
/**
 * hidden-xs-only 
 * hidden-sm-only 
 * hidden-sm-and-down 
 * hidden-sm-and-up 
 * hidden-md-only 
 * hidden-md-and-down 
 * hidden-md-and-up 
 * hidden-lg-only 
 * hidden-lg-and-down 
 * hidden-lg-and-up 
 * hidden-xl-only
 */
import ElementPlus from 'element-plus/dist/index.full'
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ElementPlus)
})