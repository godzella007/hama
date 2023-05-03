import http from "../http-common";

const getPublicContent = () => {
  return http.get("/test/all");
};

const getUserBoard = () => {
  return http.get("/test/user");
};

const getModeratorBoard = () => {
  return http.get("/test/mod");
};

const getAdminBoard = () => {
  return http.get("/test/admin");
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}

export default UserService;
