import 'source-map-support/register';
import "babel-polyfill";
import { Environment } from './index';
import { Test } from './test';

export let environment = new Environment();
export default environment;

export let { ENV, config, json } = environment;

new Test({ ENV, config, json });
