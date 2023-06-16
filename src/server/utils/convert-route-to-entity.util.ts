const mapping: Record<string, string> = {
  parties: 'party',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
