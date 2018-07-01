import storeSchema from './store.js'
import restaurantSchema from './address.js'
import hoursSchema from './hours.js'
import addressSchema from './address.js'

let schemas = {}

Object.assign(schemas, storeSchema);
Object.assign(schemas, hoursSchema);
Object.assign(schemas, addressSchema);
Object.assign(schemas, restaurantSchema);

export default schemas
