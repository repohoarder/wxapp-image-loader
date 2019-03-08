import { fs } from 'mz';
// import * as path from 'path';

async function getFiles(dir: string, files?: string[]): Promise<string[]> {
  const fileList = await fs.readdir(dir);
  const response = files || [];
  for (const file of fileList) {
    if ((await fs.stat(`${dir}/${file}`)).isFile()) {
      response.push(`${dir}/${file}`);
    } else {
      await getFiles(`${dir}/${file}`, response);
    }
  }

  return response;
}

export { getFiles };
