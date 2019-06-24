/**
 * @author WMXPY
 * @namespace Route
 * @description Avatar
 */

import { ROUTE_MODE, SudooExpressHandler, SudooExpressNextFunction, SudooExpressRequest, SudooExpressResponse } from "@sudoo/express";
import { LoggableRoute } from "./basic";
import { basicHook } from "./hook";
import { IconConfig } from "../icon/declare";

export class ServerStatusRoute extends LoggableRoute {

    public readonly path: string = '/a/:avatar';
    public readonly mode: ROUTE_MODE = ROUTE_MODE.GET;

    public readonly groups: SudooExpressHandler[] = [
        basicHook.wrap(this._serverStatusHandler.bind(this), '/a/:avatar - Main', true),
    ];

    private async _serverStatusHandler(req: SudooExpressRequest, res: SudooExpressResponse, next: SudooExpressNextFunction): Promise<void> {

        try {

            const avatar: string = req.params.avatar;
            const query: any = req.query;

            const config = this._getIconConfigFromQuery(query);
            const path = rummageLongTermTempFileOrCreateWithLazyLoadContent(
                this.createAvatarHashFileName(avatar, config),
                'svg',
                this.getCreateAvatarFunction(avatar, config),
            );

            res.agent.smartFileSend(path);
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
