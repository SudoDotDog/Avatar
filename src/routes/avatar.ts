/**
 * @author WMXPY
 * @namespace Route
 * @description Avatar
 */

import { ROUTE_MODE, SudooExpressHandler, SudooExpressNextFunction, SudooExpressRequest, SudooExpressResponse } from "@sudoo/express";
import { HTTP_RESPONSE_CODE } from "@sudoo/magic";
import { generateIcon } from "../icon/base";
import { getIconConfigFromQuery } from "../icon/parse";
import { renderSvgModel } from "../model/svg";
import { IconConfig, IconStructure } from "../sparidae/declare";
import { LoggableRoute } from "./basic";
import { basicHook } from "./hook";

export class AvatarRoute extends LoggableRoute {

    public readonly path: string = '/a/:avatar';
    public readonly mode: ROUTE_MODE = ROUTE_MODE.GET;

    public readonly groups: SudooExpressHandler[] = [
        basicHook.wrap(this._avatarHandler.bind(this), '/a/:avatar - Main'),
    ];

    private async _avatarHandler(req: SudooExpressRequest, res: SudooExpressResponse, next: SudooExpressNextFunction): Promise<void> {

        try {

            const avatar: string = req.params.avatar;
            const query: any = req.query;

            const config: IconConfig = getIconConfigFromQuery(query);
            const base: IconStructure = generateIcon(avatar, config);
            const icon: string = renderSvgModel(base);

            res.agent.raw(icon);
        } catch (err) {

            res.agent.fail(HTTP_RESPONSE_CODE.BAD_REQUEST, err);
        } finally {

            next();
        }
    }
}
