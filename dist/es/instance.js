import { Configuration } from './configuration';
import { Environment } from './index';
import { Test } from './test';

export let environment = new Environment(new Configuration());
export default environment;

export let { ENV, config, json } = environment;

new Test({ ENV, config, json });
