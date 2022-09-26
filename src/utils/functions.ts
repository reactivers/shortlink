import { REST_API } from "./constants";
import { ILinkShorter, ILinkShorterResponse } from "./types";

export const linkShorter: ILinkShorter = async ({ link }) => {
    const body = JSON.stringify({ link });
    const response = await fetch(REST_API, {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body
    })
    const json = await response.json();
    return json as ILinkShorterResponse;
}