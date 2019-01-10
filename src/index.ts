import * as commander from 'commander';

export interface IOption {
  typescript: boolean;
  host?: string;
}

const defaultOption: IOption = {
  typescript: false,
};

/**
 * 读取静态文件
 */
class WxappImageLoader {
  /**
   * 用户的配置，从命令行参数读取。
   */
  private option: IOption;

  constructor(input: commander.Command) {
    const option: IOption = defaultOption;
    if (input.typescript) {
      option.typescript = true;
    }
    this.option = option;
  }

  public load() {
    const { typescript } = this.option;
    if (typescript) {
      // tslint:disable-next-line: no-console
      console.log('生成 ts 文件');
    } else {
      // tslint:disable-next-line: no-console
      console.log('生成 js 文件');
    }
  }
}

export { WxappImageLoader };
