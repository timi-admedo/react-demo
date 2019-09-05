export const accounts = [
  { id: "5b21ca3eeb7f6fbccd471818", name: "Glennifer Love-Hewitt" },
  { id: "5b21ca3eeb7f6fbccd471814", name: "Glenny from tha block" },
  { id: "5b21ca3eeb7f6fbccd471820", name: "Glennifer Aniston" }
];

export function getAccounts() {
  return accounts.filter(acc => acc);
}
