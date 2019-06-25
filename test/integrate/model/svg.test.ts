
/**
 * @author WMXPY
 * @namespace Model
 * @description SVG
 * @override Integrate
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { generateIcon } from '../../../src/icon/base';
import { renderSvgModel } from '../../../src/model/svg';
import { IconStructure } from '../../../src/sparidae/declare';
import { Icon } from '../../legacy/icon';

describe('Given a svg integrate', (): void => {

    const chance: Chance.Chance = new Chance('model-svg');

    it('Should be able to match result', (): void => {

        const str: string = chance.string();
        const structure: IconStructure = generateIcon(str);

        const svg: string = renderSvgModel(structure);
        const legacy: string = Icon(str);

        expect(svg).to.be.equal(legacy);
    });
});
