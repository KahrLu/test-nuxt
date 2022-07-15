import appStore from '../stores'

export function useScreenIsXs() {
	return appStore.globalStore.screenWidth < 768
}

export function useScreenIsSm() {
	return appStore.globalStore.screenWidth >= 768 && appStore.globalStore.screenWidth < 992
}

export function useScreenIsSmUp() {
	return appStore.globalStore.screenWidth >= 768
}

export function useScreenIsSmDown() {
	return appStore.globalStore.screenWidth < 992
}

export function useScreenIsMd() {
	return appStore.globalStore.screenWidth >= 992 && appStore.globalStore.screenWidth < 1200
}

export function useScreenIsMdUp() {
	return appStore.globalStore.screenWidth >= 992
}

export function useScreenIsMdDown() {
	return appStore.globalStore.screenWidth < 1200
}

export function useScreenIsLg() {
	return appStore.globalStore.screenWidth >= 1200 && appStore.globalStore.screenWidth < 1920
}

export function useScreenIsLgUp() {
	return appStore.globalStore.screenWidth >= 1200
}

export function useScreenIsLgDown() {
	return appStore.globalStore.screenWidth < 1920
}

export function useScreenIsXl() {
	return appStore.globalStore.screenWidth >= 1920
}
