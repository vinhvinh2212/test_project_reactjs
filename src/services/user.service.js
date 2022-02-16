import axios from "configs/axios";
import CsrfService from "./CsrfService";

const API_LOGIN_USER = "/login";
const API_LOG_OUT_USER = "/logout";

export const UserService = {
  login,
  logout,
  getListHopital
};

async function login(user) {
  await CsrfService.CreateCSRFCookie();
  return axios.post(API_LOGIN_USER, user);
}

async function logout() {
  await CsrfService.CreateCSRFCookie();
  return axios.post(API_LOG_OUT_USER);
}

async function getListHopital() {
  await CsrfService.CreateCSRFCookie();
  return axios.get("/api/hospital/list");
}

export default UserService;
