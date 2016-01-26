import { param } from 'decorate-this';

export class Test {

  @param(Object)
  testConfig(value) {
    return true;
  }

  @param(String)
  testJson(value) {
    return true;
  }

  @param(Object)
  testEnv(value) {
    return true;
  }

  set config(value) {
    return this.testConfig(value);
  }

  set json(value) {
    return this.testJson(value);
  }

  set ENV(value) {
    return this.testEnv(value);
  }

  constructor(objects = false) {
    if (!objects) {
      throw new Error('No objects passed to test');
    }

    Object.assign(this, objects);

    return this;
  }
}

export default Test;
