import * as coffee from 'coffee';
import * as path from 'path';

const bin = path.resolve(__dirname, '../bin/index.ts');

describe('', () => {
  // tslint:disable-next-line:typedef
  it('', done => {
    coffee
      .fork(bin)
      .debug()
      .end(done);
  });
  // tslint:disable-next-line:typedef
  it('', done => {
    coffee
      .fork(bin, ['load', '-T'])
      .debug()
      .end(done);
  });
});
