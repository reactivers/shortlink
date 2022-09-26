export interface ILinkShorterParams {
    link: string;
}

export interface ILinkShorterResponse {
    link: string;
    shortlink: string;
}

export declare type ILinkShorter = (params: ILinkShorterParams) => Promise<ILinkShorterResponse>