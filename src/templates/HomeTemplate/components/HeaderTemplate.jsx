import React, { useEffect, useMemo, useState } from "react";
import Icons from "../../../components/Icons";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../../common/path";
import DropdownHeader from "../../../components/dropdown/DropdownHeader";
import {
  ButtonGhost,
  ButtonOutline,
} from "../../../components/button/ButtonCustom";
import { GlobalOutlined, MenuOutlined } from "@ant-design/icons";
import InputSearch from "../../../components/input/inputSearch/InputSearch";
import { useSelector } from "react-redux";
import { congViecService } from "../../../services/congViec.service";
import { useDebounce } from "use-debounce";
import { Dropdown } from "antd";
import "./headerTemplate.scss";
import useViewPort from "../../../hooks/useViewPort";

const HeaderTemplate = () => {
  const { width } = useViewPort();
  const [keyword, setKeyword] = useState("");
  // useDebounch trì hoãn thực thi 1 hàm cho đến 1 khoảng thời gian nhất định
  const [value] = useDebounce(keyword, 1000);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const { user } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleClickInputSearch = () => {
    setOpenDropdown(true);
  };

  const handleSearch = (value) => {
    if (value.trim()) {
      navigate(`/search?query=${value.trim()}`); // Chuyển hướng sang trang khác
    }
  };

  // useMemo : cứ mỗi lần setState ==> re-render ==> cập nhật chạy mới toàn bộ các biến cũng như function bên trong ==> quản lí các biến giúp kiểm tra khi nào thì nên tạo mới
  // useCallback : ==> quản lí các function

  // API tên công việc theo tên
  useEffect(() => {
    if (value) {
      congViecService
        .getCongViecTheoTen(value)
        .then((res) => {
          console.log(res);
          console.log(res.data.content);
          setListSearch(res.data.content);
          setOpenDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [value]);

  useEffect(() => {
    // kiểm tra nếu dữ liệu đang lấy từ redux về không có thì sẽ gọi API lấy dữ liệu
  }, []);

  const itemListSearch = useMemo(() => {
    return listSearch.slice(0, 4).map((item, index) => {
      return {
        key: item.id,
        label: (
          <div className="flex items-center">
            <img
              src={item.congViec.hinhAnh}
              className="w-16 h-16 mr-3"
              alt=""
            />
            <div>
              <h4 className="text-lg font-semibold">
                {item.congViec.tenCongViec}
              </h4>
              <p className="mt-2">Đánh giá:{item.congViec.danhGia}</p>
            </div>
          </div>
        ),
      };
    });
  }, [listSearch]);

  return (
    <header className="py-4 border-b border-b-gray-200">
      <div className="container">
        <div className="header_content flex items-center justify-between w-full">
          {/* Nút hamburger (chỉ hiển thị trên màn hình nhỏ) */}
          {width <= 1024 && (
            <button
              className="hamburger-menu p-4 text-gray-700"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {/* Hamburger Icon */}
              <i className="fa fa-bars"></i>
            </button>
          )}

          {/* Logo */}
          <div className="flex flex-1 space-x-2 items-center justify-center">
            <Link to={pathDefault.homePage}>
              <Icons.logo />
            </Link>

            {/* Input tìm kiếm chỉ hiển thị trên màn hình lớn */}
            {width > 1024 && (
              <Dropdown
                overlayClassName="dropdown-suggest"
                open={openDropdown}
                menu={{
                  items: itemListSearch,
                  onMouseLeave: () => setOpenDropdown(false),
                }}
              >
                <div className="w-full">
                  <InputSearch
                    handleSearch={handleSearch}
                    handleClick={handleClickInputSearch}
                    handleChange={handleChangeKeyword}
                    value={keyword}
                    placeholder={"What service are you looking for today?"}
                  />
                </div>
              </Dropdown>
            )}
          </div>

          {/* Phần bên phải (nút "Join", "Sign In" hoặc avatar người dùng) */}
          <div className="flex items-center space-x-2">
            {/* Hiển thị các DropdownHeader ở trên màn hình lớn */}
            {width > 1024 && (
              <>
                <DropdownHeader buttonContent="Fiverr Pro" />
                <DropdownHeader buttonContent="Explore" />
                <ButtonGhost content={"English"} icon={<GlobalOutlined />} />
                <ButtonGhost content={"Become a Seller"} />
              </>
            )}
            {/* Chỉ hiển thị nút "Join" và "Sign In" khi người dùng chưa đăng nhập */}
            {!user ? (
              <>
                <ButtonGhost
                  onClick={() => navigate(pathDefault.signUp)}
                  content={"Join"}
                />
                <ButtonOutline
                  onClick={() => navigate(pathDefault.signIn)}
                  content={"Sign In"}
                />
              </>
            ) : (
              <a
                className="info_logo"
                onClick={() => navigate(`/info/${user.id}`)}
              >
                {/* Hiển thị avatar hoặc icon nếu người dùng đã đăng nhập */}
                {user.name ? (
                  <div className="avatar-initials bg-blue-500 text-white rounded-full flex items-center justify-center text-base font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                ) : (
                  <i className="fa-regular fa-user text-gray-400 text-9xl"></i>
                )}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Menu ẩn/hiện cho màn hình nhỏ (<1024px) */}
      <div
        className={`mobile-menu fixed top-0 left-0 w-64 bg-white h-full z-50 transition-transform ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="close-menu p-4 text-red-500"
          onClick={() => setOpenMenu(false)}
        >
          Đóng
        </button>
        <nav className="p-4 space-y-4">
          {/* Input tìm kiếm trong menu */}
          <div>
            <InputSearch
              handleSearch={handleSearch}
              handleClick={handleClickInputSearch}
              handleChange={handleChangeKeyword}
              value={keyword}
              placeholder={"What service are you looking for today?"}
            />
          </div>

          {/* Các mục trong menu */}
          <DropdownHeader buttonContent="Fiverr Pro" />
          <DropdownHeader buttonContent="Explore" />
          <ButtonGhost content={"English"} icon={<GlobalOutlined />} />
          <ButtonGhost content={"Become a Seller"} />
          {!user ? (
            <>
              <ButtonGhost
                onClick={() => navigate(pathDefault.signUp)}
                content={"Join"}
              />
              <ButtonOutline
                onClick={() => navigate(pathDefault.signIn)}
                content={"Sign In"}
              />
            </>
          ) : (
            <a
              className="info_logo"
              onClick={() => navigate(`/info/${user.id}`)}
            >
              {user.name ? (
                <div className="avatar-initials bg-blue-500 text-white rounded-full flex items-center justify-center text-base font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              ) : (
                <i className="fa-regular fa-user text-gray-400 text-9xl"></i>
              )}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default HeaderTemplate;
