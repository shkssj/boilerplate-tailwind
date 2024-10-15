export let apiUrl = "http://localhost:3000";
const getFile = (path: string) => {
  return `${apiUrl}/${path}`;
};

export const setApiUrl = (url: string) => {
  apiUrl = url;
};

export default getFile;
