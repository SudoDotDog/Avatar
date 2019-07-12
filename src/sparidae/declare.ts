/**
 * @author WMXPY
 * @namespace Sparidae
 * @description declare
 */

export enum EDGE {

    LENGTH = 480,
    TOTAL = LENGTH * 4,
    AVAILABLE_SHIFT = Math.floor(LENGTH * 0.3),
}

export type Coordinate = {

    readonly x: number;
    readonly y: number;
};

export type IconConfig = {

    readonly display?: string;
    readonly center?: boolean;
    readonly circle?: boolean;
    readonly thin?: boolean;
    readonly larger?: boolean;
};

export type SVGElement = {

    readonly type: "text";
    readonly text: string;
    readonly point: Coordinate;
    readonly fontSize: number;
    readonly bold: boolean;
    readonly anchor: "middle" | "end";
    readonly baseline: "central" | "none";
} | {

    readonly type: "polygon";
    readonly points: Coordinate[];
    readonly fill: string;
};

export type IconStructure = {

    readonly circle: boolean;
    readonly aspect: boolean;
    readonly viewBox: string;
    readonly elements: SVGElement[];
};
