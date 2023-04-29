import { REST_API } from "./constants";
import { IShortenLink, IShortenLinkResponse } from "./types";

export const shortenLink: IShortenLink = async ({ link }) => {
  const body = JSON.stringify({ link });
  const response = await fetch(REST_API, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const json = await response.json();
  return json as IShortenLinkResponse;
};
