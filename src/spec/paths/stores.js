let storesPaths = {
 "/stores": {
   "get": {
     "summary": "get a list of stores by search parameters.",
     "parameters": [
       {
         "in": "query",
         "name": "store_id",
         "schema": {
           "type": "integer"
         }
       }
     ],
     "tags": [
       "Stores"
     ],
     "responses": {
       "500": {
         "content": {
           "application/json": {
             "schema": {
               "type": "object",
               "example": {
                 "error": "string"
               }
             }
           }
         }
       }
     }
   }
 },

 "/stores/{store_id}": {
   "get": {
     "summary": "get a single store by id",
     "parameters": [
       {
         "in": "query",
         "name": "store_id",
         "schema": {
           "type": "integer"
         }
       }
     ],
     "tags": [
       "Stores"
     ],
     "responses": {
       "200": {
         "content": {
           "application/json": {
             "schema": {
               "$ref": "#/components/schemas/Store"
             }
           }
         }
       },
       "404": {
         "content": {
           "text/html": {
             "schema": {
               "type": "<error page>"
             }
           }
         }
       }
     }
   }
 },
 "/stores/{store_id}/hours": {
   "get": {
     "tags": [
       "Stores"
     ],
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
 "/stores/{store_id}/menu": {
   "get": {
     "tags": [
       "Stores"
     ],
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
 "/stores/{store_id}/base_menus": {
   "get": {
     "tags": [
       "Stores"
     ],
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
 "/stores/{store_id}/menus": {
   "get": {
     "tags": [
       "Stores"
     ],
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
 "/stores/{store_id}/orders": {
   "get": {
     "tags": [
       "Stores"
     ],
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
}

export default storesPaths
