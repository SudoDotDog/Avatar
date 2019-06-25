/**
 * @author WMXPY
 * @namespace Route
 * @description Hook
 */

import { SudooExpressHook, SudooExpressRequest, SudooExpressResponse } from '@sudoo/express';
import { SudooLog } from '@sudoo/log';

export const basicHook: SudooExpressHook<[string, boolean?]> =
    SudooExpressHook.create<[string, boolean?]>()
        .before((_: SudooExpressRequest, res: SudooExpressResponse, content: string): boolean => {

            const log: SudooLog = SudooLog.global;
            const isFailed: boolean = res.agent.isFailed();

            const parsedContent = `${content}: ${
                isFailed
                    ? 'Failed'
                    : 'Entered'
                }`;

            if (isFailed) {
                log.warning(parsedContent);
            }

            return !isFailed;
        });

