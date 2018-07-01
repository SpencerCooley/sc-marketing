let restaurantSchema = {
 "Restaurant": {
   "type": "object",
   "required": [
     "store_id",
     "name",
     "address",
     "business_hours",
     "current_time",
     "time_zone_offset_mins",
     "available_services",
     "badges"
   ],
   "properties": {
     "store_id": {
       "type": "string",
       "example": "0001"
     },
     "name": {
       "type": "string",
       "example": "Test Location"
     },
     "address": {
       "$ref": "#/components/schemas/Address"
     },
     "business_hours": {
       "type": "object",
       "required": [
         "Su",
         "Mo",
         "Tu",
         "We",
         "Th",
         "Fr",
         "Sa"
       ],
       "properties": {
         "Su": {
           "type": "string",
           "example": "11:00am - 10:00pm"
         },
         "Mo": {
           "type": "string",
           "example": "8:00am - 11:00pm"
         },
         "Tu": {
           "type": "string",
           "example": "8:00am - 11:00pm"
         },
         "We": {
           "type": "string",
           "example": "8:00am - 11:00pm"
         },
         "Th": {
           "type": "string",
           "example": "8:00am - 11:00pm"
         },
         "Fr": {
           "type": "string",
           "example": "8:00am - 1:00am"
         },
         "Sa": {
           "type": "string",
           "example": "8:00am - 1:00am"
         }
       },
       "additionalProperties": false
     },
     "current_time": {
       "type": "string",
       "format": "date-time"
     },
     "time_zone_offset_mins": {
       "type": "integer"
     },
     "available_services": {
       "type": "object",
       "additionalProperties": {
         "type": "boolean",
         "default": false
       },
       "example": {
         "Pick Up": true,
         "Delivery": false
       }
     },
     "badges": {
       "type": "array",
       "items": {
         "type": "object",
         "properties": {
           "FIXME": {
             "type": "integer"
           }
         }
       }
     }
   },
   "additionalProperties": false
 }
}

export default restaurantSchema
