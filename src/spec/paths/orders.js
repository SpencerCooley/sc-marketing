let ordersPaths = {
 "/orders": {
   "post": {
     "tags": [
       "Orders"
     ],
     "response": {
       "200": {
         "content": {
           "application/json": {
             "schema": {
               "type": "object",
               "example": {
                 "hello": "world"
               }
             }
           }
         }
       }
     }
   }
 },
 "/orders/search": {
   "post": {
     "tags": [
       "Orders"
     ],
     "response": {
       "200": {
         "content": {
           "application/json": {
             "schema": {
               "type": "object",
               "example": {
                 "hello": "world"
               }
             }
           }
         }
       }
     }
   }
 },
 "/orders/{order_id}/cancel": {
   "post": {
     "tags": [
       "Orders"
     ],
     "response": {
       "200": {
         "content": {
           "application/json": {
             "schema": {
               "type": "object",
               "example": {
                 "hello": "world"
               }
             }
           }
         }
       }
     }
   }
 },
}

export default ordersPaths
