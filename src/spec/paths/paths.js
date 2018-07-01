import storesPaths from './stores.js'
import ordersPaths from './orders.js'
import customersPaths from './customers.js'

let paths = {}

Object.assign(paths, storesPaths );
Object.assign(paths, ordersPaths );
Object.assign(paths, customersPaths);

export default paths
