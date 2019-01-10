import * as coffee from 'coffee';
import * as path from 'path';

describe('', () => {
  // tslint:disable-next-line:typedef
  it('', done => {
    coffee
      .fork(path.resolve(__dirname, '../bin/index.ts'))
      .debug()
      .end(done);
  });
});
