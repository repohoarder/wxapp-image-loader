// tslint:disable:typedef
import * as coffee from 'coffee';
import * as path from 'path';

const bin = path.resolve(__dirname, '../bin/index.ts');

describe('测试 cli', () => {
  it('测试无任何输入', done => {
    coffee
      .fork(bin)
      // .debug()
      .expect('code', 0)
      .end(done);
  });

  it('测试生成 ts 文件', done => {
    coffee
      .fork(bin, ['load', '-T'])
      // .debug()
      .expect('stdout', '生成 ts 文件\n')
      .expect('code', 0)
      .end(done);
  });

  it('测试生成 js 文件', done => {
    coffee
      .fork(bin, ['load'])
      // .debug()
      .expect('stdout', '生成 js 文件\n')
      .expect('code', 0)
      .end(done);
  });
});
