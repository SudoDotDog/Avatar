/**
 * @author WMXPY
 * @namespace Icon
 * @description Base
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { generateIcon } from '../../../src/icon/base';
import { IconStructure } from '../../../src/sparidae/declare';

describe('Given a [generateIcon] function', (): void => {

    const chance: Chance.Chance = new Chance('icon-base');

    it('Should be able to generate valid icon structure', (): void => {

        const str: string = chance.string();
        const structure: IconStructure = generateIcon(str);

        expect(structure.elements).to.have.lengthOf(7);
    });
});
