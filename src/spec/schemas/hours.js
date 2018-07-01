let hoursSchema = {
 "Hours": {
   "type": "object",
   "properties": {
     "start_time": {
       "type": "string",
       "example": "10:30"
     },
     "display_name": {
       "type": "string",
       "example": "Monday"
     },
     "end_time": {
       "type": "string",
       "example": "22:00"
     },
     "day_of_week": {
       "type": "number",
       "example": 0
     }
   }
 }
}

export default hoursSchema
