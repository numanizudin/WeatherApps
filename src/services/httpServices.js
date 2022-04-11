import apiInstance from "./httpManager";
const appId = "916a20475bee8f1d2817bb87354a5b90";

const getOneCall = (lat, lon) =>
  apiInstance.get(`/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`);

export default {
  getOneCall,
};
