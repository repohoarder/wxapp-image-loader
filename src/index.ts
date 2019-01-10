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

  // tslint:disable-next-line:no-empty
  public load() {}
}

export { WxappImageLoader };
