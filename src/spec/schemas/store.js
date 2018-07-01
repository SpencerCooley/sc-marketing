let storeSchema = {
 "Store": {
   "type": "object",
   "properties": {
     "postal_code": {
       "type": "string",
       "example": "75081"
     },
     "allow_group_orders": {
       "type": "boolean",
       "example": true
     },
     "id": {
       "type": "string",
       "example": "1955"
     },
     "city": {
       "type": "string",
       "example": "Richardson"
     },
     "state": {
       "type": "string",
       "example": "TX"
     },
     "latitude": {
       "type": "number",
       "example": 32.9418683
     },
     "fax": {
       "type": "string",
       "example": "9722348119"
     },
     "address1": {
       "type": "string",
       "example": "507 S. Plano Rd."
     },
     "address2": {
       "type": "string",
       "example": ""
     },
     "today_hours": {
       "type": "string",
       "example": "10:30 AM - 10:00 PM"
     },
     "call_center_only": {
       "type": "boolean",
       "example": false
     },
     "test_store": {
       "type": "boolean",
       "example": false
     },
     "active": {
       "type": "boolean",
       "example": true
     },
     "timezone_offset_mins": {
       "type": "number",
       "example": -240
     },
     "distance": {
       "type": "number",
       "example": 0
     },
     "name": {
       "type": "string",
       "example": "Plano & Beltline"
     },
     "phone": {
       "type": "string",
       "example": "9722348118"
     },
     "special_instructions_max_length": {
       "type": "number",
       "example": 25
     },
     "country": {
       "type": "string",
       "example": "US"
     },
     "hours": {
       "type": "array",
       "items": [
         "$ref:'#/components/schemas/Hours'"
       ]
     },
     "time_zone": {
       "type": "string",
       "example": "GMT-5"
     },
     "longitude": {
       "type": "number",
       "example": -96.6998186
     },
     "local_time": {
       "type": "string",
       "example": "2018-06-29T10:47:34.829221"
     },
     "is_open": {
       "type": "boolean",
       "example": true
     }
   }
 }
}

export default storeSchema
