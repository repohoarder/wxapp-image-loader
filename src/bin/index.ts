#! /usr/bin/env node
import * as commander from 'commander';
import { WxappImageLoader } from '../index';

const parser = commander.version('0.0.1');

commander
  .command('load')
  .option('-T, --typescript', '输出的文件为 Typescript')
  .action((result: commander.Command) => {
    const loader = new WxappImageLoader(result);
    loader.load();
  });

parser.parse(process.argv);
