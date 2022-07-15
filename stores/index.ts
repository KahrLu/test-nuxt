import { useGlobalStore } from './modules/global'

export interface IAppStore {
	globalStore: ReturnType<typeof useGlobalStore>
}

const appStore: IAppStore = {} as IAppStore

/**
 * register app store
 */
export const registerStore = () => {
	appStore.globalStore = useGlobalStore()
}

export default appStore