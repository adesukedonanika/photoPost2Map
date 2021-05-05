// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PhotoPost2Map } = initSchema(schema);

export {
  PhotoPost2Map
};