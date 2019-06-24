/**
 * @author WMXPY
 * @namespace Go_Bartender
 * @description Index
 */

import { SudooExpress, SudooExpressApplication } from "@sudoo/express";
import { LOG_LEVEL, SudooLog } from "@sudoo/log";
import { MODULE_NAME } from "./util/panic";

const dbLink: string | undefined = process.env.VENDOR_DATABASE;

if (!dbLink) {
    throw new Error('dbLink');
}

const setting: SudooExpressApplication = SudooExpressApplication.create(MODULE_NAME, '1');
setting.allowCrossOrigin();
setting.setCrossOriginAllowHeaders("x-impersonate");

const app: SudooExpress = SudooExpress.create(setting);

app.health('/health');

if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'development') {
    SudooLog.global.level(LOG_LEVEL.ALL);
} else {
    SudooLog.global.level(LOG_LEVEL.INFO);
}

app.host(8080);
console.log('hosting on 8080');
