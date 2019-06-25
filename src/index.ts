/**
 * @author WMXPY
 * @namespace Go_Bartender
 * @description Index
 */

import { SudooExpress, SudooExpressApplication } from "@sudoo/express";
import { LOG_LEVEL, SudooLog } from "@sudoo/log";
import { AvatarRoute } from "./routes/avatar";
import { JsonRoute } from "./routes/json";
import { ReactRoute } from "./routes/react";
import { MODULE_NAME } from "./util/panic";

const setting: SudooExpressApplication = SudooExpressApplication.create(MODULE_NAME, '1');
setting.allowCrossOrigin();

const app: SudooExpress = SudooExpress.create(setting);

app.health('/health');

if (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'development') {
    SudooLog.global.level(LOG_LEVEL.ALL);
} else {
    SudooLog.global.level(LOG_LEVEL.INFO);
}

app.route(new AvatarRoute());
app.route(new JsonRoute());
app.route(new ReactRoute());

app.host(8080);
console.log('hosting on 8080');
