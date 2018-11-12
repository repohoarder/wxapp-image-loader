import { parser } from '../index';

//命令行输入参数转 args 数组
function argsCreater(input: string): string[] {
  return ['', ''].concat(
    input.split(' ').filter((o: string) => {
      return o;
    }),
  );
}

describe('测试参数解析', () => {
  it('测试参数解析的功能', () => {
    expect(parser.parse(argsCreater('-T')).typescript).toBe(true);
    expect(parser.parse(argsCreater('--host https://www.qq.com')).host).toBe(
      'https://www.qq.com',
    );
  });
});
