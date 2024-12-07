import { http } from "./config";

export const binhLuanService = {
  getBinhLuanTheoCongViec: (id) => {
    return http.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },
  getDanhSachBinhLuan: () => {
    return http.get("/binh-luan");
  },
  themBinhLuan: () => {
    return http.get("/");
  },
};
