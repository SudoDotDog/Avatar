/**
 * @author WMXPY
 * @namespace Model
 * @description React
 */

import { Coordinate, IconStructure, SVGElement } from "../sparidae/declare";
import { ERROR_CODE, panic } from "../util/panic";

export type Tag = "svg" | "polygon" | "text" | "g" | "defs" | "clipPath" | "circle";

export type ReactStructure = {
    readonly tag: Tag;
    readonly attributes: Record<string, any>;
    readonly children: Array<string | ReactStructure>;
};

export const renderReactModel = (structure: IconStructure): ReactStructure => {

    const result: ReactStructure = {
        tag: 'svg',
        attributes: {
            viewBox: structure.viewBox,
            preserveAspectRatio: structure.aspect ? 'true' : 'none',
        },
        children: [],
    };

    const elements: ReactStructure[] = structure.elements.map((value: SVGElement): ReactStructure => {

        if (value.type === 'polygon') {
            return {
                tag: 'polygon',
                attributes: {
                    points: value.points.map((point: Coordinate) => point.x + "," + point.y).join(' '),
                    fill: value.fill,
                },
                children: [],
            };
        } else if (value.type === 'text') {

            const style: Record<string, any> = {
                fontSize: value.fontSize,
                textAnchor: value.anchor,
                dominantBaseline: value.baseline,
            };

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
        throw panic.code(ERROR_CODE.INTERNAL_ERROR, "Undefined Tag");
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
