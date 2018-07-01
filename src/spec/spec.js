import tags from './tags.js'
import paths from './paths/paths.js'
import schemas from './schemas/schemas.js'

const spec = {
  "openapi": "3.0.0",
  "info": {
    "title": "NovaDine API",
    "contact": {
      "name": "NovaDine Development",
      "email": "dev@novadine.com"
    },
    "version": "2.0.0",
    "description": "This is a description of the API.\n"
  },
  "tags": tags,
  "externalDocs": {
    "description": "You can include links to user docs or our main website.",
    "url": "http://www.novadine.com"
  },
  "paths": paths,
  "components": {
    "schemas": schemas,
  }
}

export default spec
