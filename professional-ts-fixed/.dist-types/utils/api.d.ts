/**
 *
 * @param getData
 * @param options
 */
export declare function useAsyncDataEffect(getData: () => Promise<any>, options: {
    stateName: string;
    otherStatesToMonitor?: unknown[];
    setter: (arg: any) => void;
}): void;
