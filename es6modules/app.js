import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from './src/config.js';

console.log(key, url);
console.log(`The age of my dog ${dog} is ${old}`);

sayHi('Monica');

const ages = [1,1,4, 52, 12, 4];

console.log(uniq(ages));