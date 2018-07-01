let customersPaths = {
 "customers/{customer_id}": {
   "get": {
     "tags": [
       "Customers"
     ],
     "summary": "get customer info",
     "responses": {
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
 "customers/{customer_id}/restaurants/{restaurant_id}/favorite_restaurant": {
   "delete": {
     "tags": [
       "Customers"
     ],
     "summary": "delete a restaurant from a customer's favorites",
     "responses": {
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
 "customers/{customer_id}/addresses": {
   "post": {
     "tags": [
       "Customers"
     ],
     "summary": "add customer address",
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
 }
}

export default customersPaths
