import { http } from "./config";

export const congViecService = {
  getCongViecTheoTen: (keyword) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`);
  },
  getCongViecTheoChiTietLoai: (keyword) => {
    return http.get(`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${keyword}`);
  },
};
