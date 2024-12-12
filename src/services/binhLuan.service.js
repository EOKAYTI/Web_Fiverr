import { http } from "./config";
const dataLocal = localStorage.getItem("userInfo");
const dataUser = JSON.parse(dataLocal);

export const binhLuanService = {
  getBinhLuanTheoCongViec: (id) => {
    return http.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },
  getDanhSachBinhLuan: () => {
    return http.get("/binh-luan");
  },
  themBinhLuan: (data) => {
    return http.post("/binh-luan", data, {
      headers: { token: dataUser.token },
    });
  },
  xoaBinhLuan: (id) => {
    return http.delete(`/binh-luan/${id}`, {
      headers: { token: dataUser.token },
    });
  },
};
