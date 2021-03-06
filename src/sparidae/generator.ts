/**
 * @author WMXPY
 * @namespace Sparidae
 * @description Generator
 */

import { stringToMD5 } from "../util/crypto";

export class Generator {

    private _medium: string;

    public constructor(str: string) {
        this._medium = stringToMD5(str);
    }

    public raw(): string {
        return this._medium;
    }

    public splice(start: number, stop: number): number {
        return parseInt(this._medium.substring(start, stop), 16);
    }
}
