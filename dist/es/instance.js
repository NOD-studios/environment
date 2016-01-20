import 'source-map-support/register';
import "babel-polyfill";
import { Environment } from './environment';

export let environment = new Environment();
export default environment;
