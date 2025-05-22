export const valideURLConvert = (name)=>{
  const url = name?.toString()
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, '-')  // Replace anything not a-z, 0-9 with -
  .replace(/^-+|-+$/g, '');     // Remove leading and trailing -
  return url
}