import type { ITeam } from '../types';
export declare function isITeam(arg: any): arg is ITeam;
export declare function assertIsTypedArray<T>(arg: any, check: (val: any) => val is T): asserts arg is T[];
export declare function getAllTeams(): Promise<ITeam[]>;
export declare function getTeamById(id: string): Promise<ITeam>;
