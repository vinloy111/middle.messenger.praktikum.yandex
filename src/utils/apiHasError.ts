export function apiHasError(response: XMLHttpRequest): boolean {
  return response.status !== 200;
}
