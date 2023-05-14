// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ShortUrls } = initSchema(schema);

export {
  ShortUrls
};