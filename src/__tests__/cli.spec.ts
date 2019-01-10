import * as coffee from 'coffee';
import * as path from 'path';

describe('测试参数解析', () => {
  // tslint:disable-next-line:typedef
  it('测试参数解析的功能', done => {
    coffee
      .fork(path.resolve(__dirname, '../bin/index.ts'))
      .debug()
      .end(done);
  });
});
