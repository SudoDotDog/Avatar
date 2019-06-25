/**
 * @author WMXPY
 * @namespace Sparidae
 * @description Parser
 */

export default class Parser {

    private _content: string;

    public constructor(str: string) {

        this._content = str;
    }

    public getOneDigitResult(): string {

        return this._content.substring(0, 1).toUpperCase();
    }

    public getTwoDigitResult(): string {

        const arr: string[] = this._content.split(" ");
        switch (arr.length) {
            case 1:
                if (arr[0].length === 0) {
                    return "**";
                }
                return this._content.substring(0, 1).toUpperCase() + this._content.substring(this._content.length - 1, this._content.length).toLowerCase();

            case 2:
                return arr[0].substring(0, 1).toUpperCase() + arr[1].substring(0, 1).toUpperCase();

            default:
                return arr[0].substring(0, 1).toUpperCase() + arr[arr.length - 1].substring(0, 1).toUpperCase();

        }
    }

    public getThreeDigitResult(): string {

        const splited: string[] = this._content.split(" ");
        switch (splited.length) {

            case 1:
                if (splited[0].length === 0) {
                    return "***";
                }
                if (this._content.length < 3) {
                    return this._content.substring(0, 1).toUpperCase() +
                        this._content.substring(this._content.length - 1, this._content.length).toLowerCase() + "*";
                }
                return this._content.substring(0, 1).toUpperCase() +
                    this._content.substring(1, 2).toLowerCase() +
                    this._content.substring(this._content.length - 1, this._content.length).toLowerCase();

            case 2:
                if (splited[0].length < 2) {
                    if (splited[1].length < 1) {
                        return (splited[0].length === 1 ? (splited[0].toUpperCase() + "*") : "**") + " *";
                    } else if (splited[1].length < 2) {
                        return (splited[0].length === 1 ? (splited[0].toUpperCase() + "*") : splited[1].toUpperCase) + " *";
                    }
                    return splited[0].substring(0, 1).toUpperCase() +
                        splited[1].substring(0, 1).toUpperCase() + " " +
                        splited[1].substring(splited[1].length - 1, splited[1].length).toLowerCase();
                }

                return splited[0].substring(0, 1).toUpperCase() +
                    splited[0].substring(1, 2).toLowerCase() + " " +
                    splited[1].substring(0, 1).toUpperCase();

            case 3:
                return splited[0].substring(0, 1).toUpperCase() +
                    splited[1].substring(0, 1).toLowerCase() + " " +
                    splited[2].substring(0, 1).toUpperCase();

            default:
                return splited[0].substring(0, 1).toUpperCase() +
                    splited[1].substring(0, 1).toLowerCase() + " " +
                    splited[splited.length - 1].substring(0, 1).toUpperCase();
        }
    }

}
