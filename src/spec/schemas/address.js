let addressSchema = {
  "Address": {
    "type": "object",
    "required": [
      "address1",
      "city",
      "state",
      "postal_code",
      "phone"
    ],
    "properties": {
      "address1": {
        "type": "string",
        "example": "1400 Sunday Dr"
      },
      "address2": {
        "type": "string",
        "example": "Suite 103"
      },
      "address3": {
        "type": "string",
        "example": ""
      },
      "city": {
        "type": "string",
        "example": "Raleigh"
      },
      "state": {
        "type": "string",
        "example": "NC"
      },
      "postal_code": {
        "type": "string",
        "example": "27607"
      },
      "phone": {
        "type": "string",
        "example": "919-555-1234"
      },
      "latitude": {
        "type": "number",
        "example": 35.7984187
      },
      "longitude": {
        "type": "number",
        "example": -78.7332941
      }
    }
  }
}

export default addressSchema
