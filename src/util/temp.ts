/**
 * @author WMXPY
 * @namespace Util
 * @description Temp
 */

import * as Os from "os";
import * as Path from "path";

export const getTempFilePath = (filename: string): string => {

    const temp: string = Os.tmpdir();
    return Path.join(temp, filename);
};

