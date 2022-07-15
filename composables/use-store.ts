import { Store, storeToRefs } from 'pinia'
import appStore from '../stores'

export const useStoreToRefs = (store: Store) => {
	return storeToRefs(store)
}

export default function () {
	return appStore
}