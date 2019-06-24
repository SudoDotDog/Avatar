/**
 * @author WMXPY
 * @namespace Util
 * @description Panic
 */

import { Panic } from 'connor';

export const MODULE_NAME = 'Sudoo-Avatar';

export enum ERROR_CODE {

    INTERNAL_ERROR = 1001,
    POINT_INTERNAL_ERROR = 1005,

    EDGE_OUT_OF_BOUND = 2010,
}

export const ERROR_LIST: Record<ERROR_CODE, string> = {

    [ERROR_CODE.INTERNAL_ERROR]: 'Internal error',
    [ERROR_CODE.POINT_INTERNAL_ERROR]: 'Point internal error',

    [ERROR_CODE.EDGE_OUT_OF_BOUND]: 'Edge out of bound',
};

export const panic: Panic<ERROR_CODE> = Panic.withDictionary(MODULE_NAME, ERROR_LIST);
