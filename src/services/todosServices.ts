import { request } from "../requests";

/**
 *
 * Get News Services.
 *
 * params {integer} offset - offset.
 * params {integer} recordsLimit - limit record: default 10.
 *
 */
export const getTodosServices = () => {
  return request.get("/todos");
};
