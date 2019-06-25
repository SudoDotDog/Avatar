/**
 * @author WMXPY
 * @namespace Chaetodon
 * @description Chaetodon
 */

export type ColorSet = Array<string[5]>;

export enum COLOR_CODE {
    SUN = 1,
    RAIN,
    SNOW,
    CLOUD,
    FOG,
    HAIL,
    STORM,
    WIND,
    BREEZE,
    STAR,
    TWILIGHT,
    MIDNIGHT,
    NOVA,
    ROSE,
    CHAOS,
}

export const colorList: {
    [key: number]: string[];
} = {

    [COLOR_CODE.SUN]: ["fff353", "fec039", "fe8c43", "ed6023", "e20909"],
    [COLOR_CODE.RAIN]: ["f7f4ea", "ded9e2", "c0b9dd", "80a1d4", "75c9c8"],
    [COLOR_CODE.SNOW]: ["ced3dc", "fcf7f8", "84c4e4", "3a8ad3", "505050"],
    [COLOR_CODE.CLOUD]: ["dcdcdd", "c5c3c6", "46494c", "4c5c68", "1985a1"],
    [COLOR_CODE.FOG]: ["ffcdb2", "ffb4a2", "e5989b", "b5838d", "6d6875"],
    [COLOR_CODE.HAIL]: ["e63946", "f1faee", "a8dadc", "457b9d", "1d3557"],
    [COLOR_CODE.STORM]: ["ee6c4d", "f38d68", "662c91", "17a398", "33312e"],
    [COLOR_CODE.WIND]: ["2a4d7f", "b2c9bf", "956974", "f6acad", "f5d5d9"],
    [COLOR_CODE.BREEZE]: ["7bdff2", "b2f7ef", "eff7f6", "f7d6e0", "f2b5d4"],
    [COLOR_CODE.STAR]: ["e42e03", "000000", "f0a202", "ffffff", "151617"],
    [COLOR_CODE.TWILIGHT]: ["05668d", "028090", "00a896", "02c39a", "f0f3bd"],
    [COLOR_CODE.MIDNIGHT]: ["2e1760", "3423a6", "7180b9", "dff3e4", "170a1c"],
    [COLOR_CODE.NOVA]: ["ffb997", "f67e7d", "843b62", "0b032d", "74546a"],
    [COLOR_CODE.ROSE]: ["9c89b8", "f0a6ca", "efc3e6", "f0e6ef", "b8bedd"],
    [COLOR_CODE.CHAOS]: ["f6511d", "ffb400", "00a6ed", "7fb800", "0d2c54"],
};

export const chaetodon = (code?: number): ColorSet => {

    if (code && (code in COLOR_CODE)) {

        return colorList[code];
    } else if (code && !(code in COLOR_CODE)) {

        const index: COLOR_CODE = (Math.floor(code % (Object.keys(COLOR_CODE).length / 2))) + 1;
        return colorList[index];
    } else {

        const ran: COLOR_CODE = (Math.floor((Math.random() * 1000)) % 15) + 1;
        return colorList[ran];
    }
};
