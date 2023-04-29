export interface IShortenLinkParams {
  link: string;
}

export interface IShortenLinkResponse {
  link: string;
  shortlink: string;
}

export declare type IShortenLink = (
  params: IShortenLinkParams
) => Promise<IShortenLinkResponse>;
