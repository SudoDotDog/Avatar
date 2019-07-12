/**
 * @author WMXPY
 * @namespace Chaetodon
 * @description Chaetodon
 */

import { _Map } from "@sudoo/bark/map";

export type ColorSet = Array<string[5]>;

export enum COLOR_CODE {

    FRAME = 0,
    SUN = 1,
    RAIN = 2,
    SNOW = 3,
    CLOUD = 4,
    FOG = 5,
    HAIL = 6,
    STORM = 7,
    WIND = 8,
    BREEZE = 9,
    STAR = 10,
    TWILIGHT = 11,
    MIDNIGHT = 12,
    NOVA = 13,
    ROSE = 14,
    CHAOS = 15,
    SUNSET = 16,
    SWAMP = 17,
    MINT = 18,
    DESIRE = 19,
    TURQUOISE = 20,
    FIERY = 21,
    INSPIRATION = 22,
    ILLUSION = 23,
}

export const colorList: Record<COLOR_CODE, string[]> = {

    [COLOR_CODE.FRAME]: ['a3586d', '5c4a72', 'f3b05a', 'f4874b', 'f46a4e'],
    [COLOR_CODE.SUN]: ['fff353', 'fec039', 'fe8c43', 'ed6023', 'e20909'],
    [COLOR_CODE.RAIN]: ['f7f4ea', 'ded9e2', 'c0b9dd', '80a1d4', '75c9c8'],
    [COLOR_CODE.SNOW]: ['ced3dc', 'fcf7f8', '84c4e4', '3a8ad3', '505050'],
    [COLOR_CODE.CLOUD]: ['dcdcdd', 'c5c3c6', '46494c', '4c5c68', '1985a1'],
    [COLOR_CODE.FOG]: ['ffcdb2', 'ffb4a2', 'e5989b', 'b5838d', '6d6875'],
    [COLOR_CODE.HAIL]: ['e63946', 'f1faee', 'a8dadc', '457b9d', '1d3557'],
    [COLOR_CODE.STORM]: ['ee6c4d', 'f38d68', '662c91', '17a398', '33312e'],
    [COLOR_CODE.WIND]: ['2a4d7f', 'b2c9bf', '956974', 'f6acad', 'f5d5d9'],
    [COLOR_CODE.BREEZE]: ['7bdff2', 'b2f7ef', 'eff7f6', 'f7d6e0', 'f2b5d4'],
    [COLOR_CODE.STAR]: ['e42e03', '000000', 'f0a202', 'ffffff', '151617'],
    [COLOR_CODE.TWILIGHT]: ['05668d', '028090', '00a896', '02c39a', 'f0f3bd'],
    [COLOR_CODE.MIDNIGHT]: ['2e1760', '3423a6', '7180b9', 'dff3e4', '170a1c'],
    [COLOR_CODE.NOVA]: ['ffb997', 'f67e7d', '843b62', '0b032d', '74546a'],
    [COLOR_CODE.ROSE]: ['9c89b8', 'f0a6ca', 'efc3e6', 'f0e6ef', 'b8bedd'],
    [COLOR_CODE.CHAOS]: ['f6511d', 'ffb400', '00a6ed', '7fb800', '0d2c54'],
    [COLOR_CODE.SUNSET]: ['36688d', 'f3cd05', 'f49f05', 'f12904', 'bda589'],
    [COLOR_CODE.SWAMP]: ['6465a5', '6975a6', 'f3e96b', 'f28a30', 'f05837'],
    [COLOR_CODE.MINT]: ['80add7', '0abda0', 'ebf2ea', 'd4dca9', 'bf9d7a'],
    [COLOR_CODE.DESIRE]: ['270101', '720017', 'd8d583', 'd9ac2a', '763f02'],
    [COLOR_CODE.TURQUOISE]: ['04060f', '03353e', '0294a5', 'a79c93', 'c1403d'],
    [COLOR_CODE.FIERY]: ['594346', '212027', 'f22f08', '8d2f23', '561e18'],
    [COLOR_CODE.INSPIRATION]: ['a3445d', '8d2d56', '0d050e', '2b193e', 'd53c3c'],
    [COLOR_CODE.ILLUSION]: ['5aa382', '78d6ac', 'bda728', '704307', 'f7b178'],
};

export const chaetodon = (code?: number): ColorSet => {

    const length: number = _Map.keys(colorList).length;
    if (code && (code in COLOR_CODE)) {

        return colorList[code as COLOR_CODE];
    } else if (code && !(code in COLOR_CODE)) {

        const index: COLOR_CODE = code % length;
        return colorList[index];
    } else {

        const ran: COLOR_CODE = (Math.floor((Math.random() * 1000)) % length);
        return colorList[ran];
    }
};
