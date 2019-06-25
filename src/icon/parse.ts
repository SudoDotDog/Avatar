/**
 * @author WMXPY
 * @namespace Icon
 * @description Parse
 */

import { IconConfig } from "../sparidae/declare";

export const getIconConfigFromQuery = (query: any): IconConfig => {

    const config: IconConfig = {
        display: query.text === '@E' ? '' : query.text,
        center: query.center ? true : false,
        circle: query.round ? true : false,
        thin: query.thin ? true : false,
        larger: query.larger ? true : false,
    };
    return config;
};
