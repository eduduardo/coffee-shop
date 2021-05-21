export const colors = {
  primary: '#4A2C29',
};

export function filterWithQuerySearch(query, results) {
  const regex = new RegExp(`${query}.*`, 'i');
  return results.filter((item) => regex.test(item.name));
}
