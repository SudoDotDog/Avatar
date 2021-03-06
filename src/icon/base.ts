/**
 * @author WMXPY
 * @namespace Icon
 * @description Base
 */

import { Color, getColor } from "@bwnl/color";
import { Coordinate, EDGE, IconConfig, IconStructure, SVGElement } from '../sparidae/declare';
import { Generator } from '../sparidae/generator';
import { Parser } from '../sparidae/parser';
import { Point } from '../sparidae/point';

export const getDisplay = (content: string, display?: string): string => {

    if (display) {

        return display;
    } else if (display === '') {

        return display;
    }

    const parser: Parser = new Parser(content);
    return parser.getTwoDigitResult();
};

// tslint:disable: no-magic-numbers
export const generateIcon = (str: string, options: IconConfig = {}): IconStructure => {

    const generator: Generator = new Generator(str);
    const point: Point = new Point();

    const color: Color = Color.fromList(getColor(generator.splice(27, 30)));

    const points: Coordinate[] = [

        point.getPoint(generator.splice(0, 6)),
        point.getPoint(generator.splice(6, 12)),
        point.getPoint(generator.splice(12, 18)),
        point.getPoint(generator.splice(18, 24)),
        point.getPoint(generator.splice(21, 27)),
        point.getPoint(generator.splice(24, 30)),
        point.getPoint(generator.splice(5, 12)),
        point.getPoint(generator.splice(15, 21)),
        point.getPoint(generator.splice(23, 28)),
    ];

    points.push(

        point.getMediumPoint(points[0], points[3], generator.splice(18, 21)),
        point.getMediumPoint(points[1], points[4], generator.splice(21, 24)),
        point.getMediumPoint(points[2], points[5], generator.splice(24, 27)),
        point.getMediumPoint(points[3], points[6], generator.splice(18, 21)),
        point.getMediumPoint(points[4], points[7], generator.splice(21, 24)),
        point.getMediumPoint(points[5], points[8], generator.splice(24, 27)),
        point.getMediumPoint(points[6], points[0], generator.splice(18, 21)),
        point.getMediumPoint(points[7], points[1], generator.splice(21, 24)),
        point.getMediumPoint(points[8], points[2], generator.splice(24, 27)),
    );

    const loop: () => string = color.rgba();

    const elements: SVGElement[] = [
        {
            type: 'polygon',
            points: [points[0], points[1], points[2]],
            fill: loop(),
        },
        {
            type: 'polygon',
            points: [points[3], points[4], points[5]],
            fill: loop(),
        },
        {
            type: 'polygon',
            points: [points[6], points[7], points[8]],
            fill: loop(),
        },
        {
            type: 'polygon',
            points: [points[9], points[10], points[11]],
            fill: loop(),
        },
        {
            type: 'polygon',
            points: [points[12], points[13], points[14]],
            fill: loop(),
        },
        {
            type: 'polygon',
            points: [points[15], points[16], points[17]],
            fill: loop(),
        },
    ];

    const fontSize: number = options.larger ? point.getLargerFontSize() : point.getFontSize();
    const display: string = getDisplay(str, options.display);

    if (options.center) {
        elements.push({
            type: 'text',
            text: display,
            point: point.getCenterPoint(),
            fontSize,
            bold: !options.thin,
            anchor: 'middle',
            baseline: 'central',
        });
    } else {
        elements.push({
            type: 'text',
            text: display,
            point: point.getEndPoint(),
            fontSize,
            bold: !options.thin,
            anchor: 'end',
            baseline: 'auto',
        });
    }

    return {
        circle: Boolean(options.circle),
        aspect: false,
        viewBox: `0 0 ${EDGE.LENGTH} ${EDGE.LENGTH}`,
        elements,
    };
};
// tslint:enable: no-magic-numbers
