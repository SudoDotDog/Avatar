/**
 * @author WMXPY
 * @namespace Route
 * @description Avatar
 */

import { ROUTE_MODE, SudooExpressHandler, SudooExpressNextFunction, SudooExpressRequest, SudooExpressResponse } from "@sudoo/express";
import { generateIcon } from "../icon/base";
import { renderSvgModel } from "../model/svg";
import { IconConfig, IconStructure } from "../sparidae/declare";
import { LoggableRoute } from "./basic";
import { basicHook } from "./hook";

export class AvatarRoute extends LoggableRoute {

    public readonly path: string = '/a/:avatar';
    public readonly mode: ROUTE_MODE = ROUTE_MODE.GET;

    public readonly groups: SudooExpressHandler[] = [
        basicHook.wrap(this._avatarHandler.bind(this), '/a/:avatar - Main', true),
    ];

    private async _avatarHandler(req: SudooExpressRequest, res: SudooExpressResponse, next: SudooExpressNextFunction): Promise<void> {

        try {

            const avatar: string = req.params.avatar;
            const query: any = req.query;

            const config: IconConfig = this._getIconConfigFromQuery(query);
            const base: IconStructure = generateIcon(avatar, config);
            const icon: string = renderSvgModel(base);

            res.agent.raw(icon);
        } catch (err) {
            res.agent.fail(400, err);
        } finally {
            next();
        }
    }

    private _getIconConfigFromQuery(query: any): IconConfig {

        const config: IconConfig = {
            display: query.text === '@E' ? '' : query.text,
            center: query.center ? true : false,
            circle: query.round ? true : false,
            thin: query.thin ? true : false,
            larger: query.larger ? true : false,
        };
        return config;
    }
}
