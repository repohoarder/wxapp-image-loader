// import * as fs from 'fs';
import * as commander from 'commander';
const zlogger = require('zlogger');

// import * as ConsoleLogger from 'zlogger';

export interface IOption {
  typescript: boolean;
  host?: string;
  source?: string;
}

const defaultOption: IOption = {
  typescript: false,
  source: 'static',
};

/**
 * 读取静态文件
 */
class WxappImageLoader {
  /**
   * 用户的配置，从命令行参数读取。
   */
  private option: IOption;
  private logger: ConsoleLogger;

  constructor(input: commander.Command) {
    this.logger = new ConsoleLogger({
      prefix: '',
      time: false,
    });
    const option: IOption = defaultOption;
    if (input.typescript) {
      option.typescript = true;
    }
    this.option = option;
  }

  public async load() {
    const { typescript } = this.option;
    // const sourcePath = path.resolve(process.cwd(), source);

    if (typescript) {
      this.logger.info('生成 ts 文件');
    } else {
      // tslint:disable-next-line: no-console
      this.logger.info('生成 ts 文件');
    }
  }
}

export { WxappImageLoader };
