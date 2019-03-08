import { getFiles } from '../readFile';

import * as path from 'path';

const fixtures = path.resolve(__dirname, './fixtures/');

describe('test getFiles', () => {
  it('test file notExist', async () => {
    try {
      await getFiles(path.join(fixtures, 'notExist'));
    } catch (e) {
      expect(e.message).toContain('ENOENT: no such file or directory');
    }
  });
  it('test file not a directory', async () => {
    try {
      await getFiles(path.join(fixtures, 'file1'));
    } catch (e) {
      expect(e.message).toContain('ENOTDIR: not a directory');
    }
  });
  it('test file exist', async () => {
    [
      'file1',
      'floder/file4',
      'floder/folder2/file2',
      'floder/folder2/file2',
    ].forEach(async (file: string) => {
      expect(await getFiles(fixtures)).toContain(path.join(fixtures, file));
    });

    expect((await getFiles(fixtures)).length).toEqual(4);
  });
});
