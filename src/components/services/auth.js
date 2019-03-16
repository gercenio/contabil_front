export const TOKEN_KEY = "MDEzODk5MjgwMDAxNzJIR00gQ09OU1VMVE9SRVMgU1MgTFREQQ==";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};