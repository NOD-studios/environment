import 'source-map-support/register';
import "babel-polyfill";
import { Environment } from './environment';

export let environment = new Environment();
export default environment;

let { ENV, config } = environment;

if ( typeof ENV !== 'object') {
  throw new Error('Environment variables are could not parsed');
}

if ( typeof config !== 'object') {
  throw new Error('Environment variables are could not converted into object');
}
