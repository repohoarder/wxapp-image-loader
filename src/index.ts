import * as commander from 'commander';

const parser = commander
  .version('0.0.1')
  .option('-T, --typescript', '输出的文件为 Typescript')
  .option('--host  [value]', '静态文件所在的域名')
  .option('--limit [value]', '低于指定的限制时，可以返回 Base64。默认为 10k')
  .option('--test [value]', '需要的文件格式')
  .option('--ignore [value]', '忽略的文件格式')
  .option('--target [value]', '目标文件')
  .option('--dist [value]', '输出文件夹');

export interface IOption {
  typescript: boolean;
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

  public getOption() {
    return this.option;
  }
}

export { parser, WxappImageLoader, defaultOption };
