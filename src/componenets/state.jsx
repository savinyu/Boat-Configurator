import { proxy } from 'valtio'

const state = proxy({
	color: 'purple',
})

export { state }