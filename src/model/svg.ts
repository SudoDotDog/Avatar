/**
 * @author WMXPY
 * @namespace Model
 * @description Svg
 */

import { Coordinate, EDGE, IconStructure, SVGElement } from "../sparidae/declare";

export const renderSvgModel = (structure: IconStructure): string => {

    const buffer: string[] = [
        `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${structure.viewBox}" version="1.1" preserveAspectRatio="${structure.aspect ? "true" : "none"}">`,
    ];

    if (structure.circle) {
        buffer.push("<g clip-path=\"url(#circle)\">");
    } else {
        buffer.push("<g>");
    }

    buffer.push(...structure.elements.map((value: SVGElement) => {

        if (value.type === 'polygon') {
            return `<polygon points="` + value.points.map((point: Coordinate) => point.x + "," + point.y).join(' ') + `" fill="${value.fill}" />`;
        } else if (value.type === 'text') {

            const dominant: string = value.baseline === 'none' ? '' : `;dominant-baseline:${value.baseline}`;
            return `<text x="${value.point.x}" y="${value.point.y}" style="font-weight:${value.bold ? "bold" : "normal"};font-size:${value.fontSize};text-anchor:${value.anchor}${dominant}">${value.text}</text>`;
        }
        return '';
    }));

    buffer.push('</g>');
    if (structure.circle) {
        buffer.push(`<defs><clipPath id="circle"><circle cx="240" cy="240" r="240"/></clipPath></defs>`);
    }
    buffer.push(`</svg>`);

    return buffer.join('');
};
