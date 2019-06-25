/**
 * @author WMXPY
 * @namespace Chaetodon
 * @description Chaetodon
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { chaetodon, ColorSet } from '../../../src/chaetodon/chaetodon';

describe('Given a [chaetodon] function', (): void => {

    const chance: Chance.Chance = new Chance('chaetodon-chaetodon');

    it('Should be able to get color set', (): void => {

        const number: number = chance.natural();
        const set: ColorSet = chaetodon(number);

        expect(set).to.have.lengthOf(5);
    });
});
