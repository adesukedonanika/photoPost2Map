// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';


const { PhotoPost2Map } = initSchema(schema);

export {
  PhotoPost2Map
};


import { DataStore } from '@aws-amplify/datastore';
import { PhotoPost2Map } from './models';


await DataStore.save(
  new PhotoPost2Map({
  "datetime": "1970-01-01T12:30:23.999Z",
  "geojson":  /* Provide init commands */,
  "direction": 123.45,
  "dateJST": "1970-01-01Z",
  "timeJST": "12:30:23.999Z",
  "elevation": 123.45,
  "gnssFix": true
})
);
