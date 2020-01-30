/**
 * @author WMXPY
 * @namespace Route
 * @description Json
 */

import { ROUTE_MODE, SudooExpressHandler, SudooExpressNextFunction, SudooExpressRequest, SudooExpressResponse } from "@sudoo/express";
import { HTTP_RESPONSE_CODE } from "@sudoo/magic";
import { generateIcon } from "../icon/base";
import { getIconConfigFromQuery } from "../icon/parse";
import { JsonStructure, renderJsonModel } from "../model/json";
import { IconConfig, IconStructure } from "../sparidae/declare";
import { LoggableRoute } from "./basic";
import { basicHook } from "./hook";

export class JsonRoute extends LoggableRoute {

    public readonly path: string = '/j/:avatar';
    public readonly mode: ROUTE_MODE = ROUTE_MODE.GET;

    public readonly groups: SudooExpressHandler[] = [
        basicHook.wrap(this._jsonHandler.bind(this), '/j/:avatar - Main'),
    ];

    private async _jsonHandler(req: SudooExpressRequest, res: SudooExpressResponse, next: SudooExpressNextFunction): Promise<void> {

        try {

            const avatar: string = req.params.avatar;
            const query: any = req.query;

            const config: IconConfig = getIconConfigFromQuery(query);
            const base: IconStructure = generateIcon(avatar, config);
            const result: JsonStructure = renderJsonModel(base);

            res.agent.add('avatar', result);
        } catch (err) {

            res.agent.fail(HTTP_RESPONSE_CODE.BAD_REQUEST, err);
        } finally {

            next();
        }
    }
}
