export const CONFIG_APP = {
  APP_NAME: import.meta.env.APP_NAME,
  BASE_URL: import.meta.env.APP_BASE_URL,
};

export const API_ENDPOINT = {
  login: `${CONFIG_APP.BASE_URL}/auth/admin/login`,
  register: `${CONFIG_APP.BASE_URL}/auth/admin/register`,
  anggota: `${CONFIG_APP.BASE_URL}/anggota`,
}