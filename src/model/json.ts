/**
 * @author WMXPY
 * @namespace Model
 * @description Json
 */

import { Coordinate, IconStructure, SVGElement } from "../sparidae/declare";
import { ERROR_CODE, panic } from "../util/panic";

export type Tag = "svg" | "polygon" | "text" | "g" | "defs" | "clipPath" | "circle";

export type JsonStructure = {
    readonly tag: Tag;
    readonly attributes: Record<string, string>;
    readonly children: Array<string | JsonStructure>;
};

export const renderJsonModel = (structure: IconStructure): JsonStructure => {

    const result: JsonStructure = {
        tag: 'svg',
        attributes: {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: structure.viewBox,
            version: '1.1',
            preserveAspectRatio: structure.aspect ? 'true' : 'none',
        },
        children: [],
    };

    const elements: JsonStructure[] = structure.elements.map((value: SVGElement): JsonStructure => {

        if (value.type === 'polygon') {
            return {
                tag: 'polygon',
                attributes: {
                    points: value.points.map((point: Coordinate) => `${point.x},${point.y}`).join(' '),
                    fill: value.fill,
                },
                children: [],
            };
        } else if (value.type === 'text') {

            const fontWeight: string = value.bold ? 'font-weight:bold;' : '';
            const dominant: string = value.baseline === 'auto' ? '' : `;dominant-baseline:${value.baseline}`;
            const style: string = `${fontWeight}font-size:${value.fontSize};text-anchor:${value.anchor}${dominant}`;

            return {
                tag: 'text',
                attributes: {
                    style,
                    x: value.point.x.toString(),
                    y: value.point.y.toString(),
                },
                children: [value.text],
            };
        }
        throw panic.code(ERROR_CODE.INTERNAL_ERROR, 'Undefined Tag');
    });

    if (structure.circle) {
        result.children.push({
            tag: 'g',
            attributes: {
                clipPath: 'url(#circle)',
            },
            children: elements,
        });
    } else {
        result.children.push({
            tag: 'g',
            attributes: {},
            children: elements,
        });
    }

    if (structure.circle) {
        result.children.push({
            tag: 'defs',
            attributes: {},
            children: [{
                tag: 'clipPath',
                attributes: {
                    id: 'circle',
                },
                children: [{
                    tag: 'circle',
                    attributes: {
                        cx: '240',
                        cy: '240',
                        r: '240',
                    },
                    children: [],
                }],
            }],
        });
    }

    return result;
};
