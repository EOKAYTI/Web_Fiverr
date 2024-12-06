import React, { useEffect, useMemo, useState } from "react";
import Icons from "../../../components/Icons";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../../common/path";
import DropdownHeader from "../../../components/dropdown/DropdownHeader";
import {
  ButtonGhost,
  ButtonOutline,
} from "../../../components/button/ButtonCustom";
import { GlobalOutlined } from "@ant-design/icons";
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

  return width > 576 ? (
    <header className="py-4 border-b border-b-gray-200">
      <div className="container">
        <div className="header_content flex items-center justify-between">
          {/* logo  */}
          <div className="flex flex-1 space-x-2 items-center">
            <Link to={pathDefault.homePage}>
              <Icons.logo />
            </Link>
            {width > 576 && (
              <Dropdown
                overlayClassName="dropdown-suggest"
                open={openDropdown}
                menu={{
                  items: itemListSearch,
                  onMouseLeave: () => {
                    setOpenDropdown(false);
                  },
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
          {/* search input  */}
          <div className="header_action space-x-1">
            <DropdownHeader buttonContent="Fiverr Pro" />
            <DropdownHeader buttonContent="Explore" />
            <ButtonGhost content={"English"} icon={<GlobalOutlined />} />
            <ButtonGhost content={"Become a Seller"} />
            {!user ? (
              <>
                <ButtonGhost
                  onClick={() => {
                    console.log("đã click sign up");
                    navigate(pathDefault.signUp);
                  }}
                  content={"Join"}
                />
                <ButtonOutline
                  onClick={() => {
                    console.log("đã click sign in");
                    navigate(pathDefault.signIn);
                  }}
                  content={"Sign In"}
                />
              </>
            ) : (
              <a
                className="info_logo"
                // className="info_logo w-max inline-block"
                onClick={() => {
                  navigate(`/info/${user.id}`);
                }}
              >
                {/* {user.name} */}
                {user.name ? (
                  <div className="avatar-initials bg-blue-500 text-white rounded-full flex items-center justify-center text-base font-bold">
                    {user.name.charAt(0).toUpperCase()}{" "}
                    {/* Lấy chữ cái đầu và in hoa */}
                  </div>
                ) : (
                  <i className="fa-regular fa-user text-gray-400 text-9xl"></i>
                )}
              </a>
            )}
            {/* <Link to={pathDefault.admin}>go to admin</Link> */}
          </div>
        </div>
      </div>
    </header>
  ) : (
    <div>Tôi nhỏ hơn 576px</div>
  );
};

export default HeaderTemplate;
