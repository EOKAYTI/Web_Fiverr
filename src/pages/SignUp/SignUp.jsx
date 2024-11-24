import React, { useContext } from "react";
import Lottie from "react-lottie";
import * as loginAnimation from "./../../assets/animation/loginAnimation.json";
import Icons from "../../components/Icons";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { pathDefault } from "../../common/path";
import { Input } from "antd";
import { useFormik } from "formik";
import { ButtonOutline } from "../../components/button/ButtonCustom";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const SignUp = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleNofication = useContext(NotificationContext);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        password: "",
        rePassword: "",
        hoTen: "",
        email: "",
        soDienThoai: "",
      },
      onSubmit: (values) => {
        authService
          .signUp(values)
          .then((res) => {
            console.log(res);
            // thao tác khi đăng ký thành công
            handleNofication("success", "Đăng ký tài khoản thành công", 1500);

            // đẩy người dùng vè trang đăng nhập
            setTimeout(() => {
              navigate(pathDefault.signIn);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
            // thao tác khi đăng ký thất bại
            handleNofication("err", "Đăng ký tài khoản thất bại");
          });
      },
      // validation
      validationSchema: Yup.object({
        taiKhoan: Yup.string()
          .required("Vui lòng không bỏ trống")
          .min(5, "Tài khoản phải có ít nhất 5 ký tự")
          .max(20, "Tài khoản chỉ có tối đa 20 ký tự"),
        password: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(/[A-Z]/, "Mật khẩu phải có ít nhất một chữ cái viết hoa")
          .matches(/[a-z]/, "Mật khẩu phải có ít nhất một chữ cái viết thường")
          .matches(/[0-9]/, "Mật khẩu phải có ít nhất một số")
          .matches(/[@$!%*?&]/, "Mật khẩu phải có ít nhất một ký tự đặc biệt"),
        rePassword: Yup.string()
          .required("Vui lòng không bỏ trống")
          .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không khớp"),
        hoTen: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(
            /^[\p{L}\s]+$/u,
            "Họ tên chỉ được chứa chữ cái (bao gồm dấu tiếng Việt) và khoảng trắng"
          ),
        email: Yup.string()
          .email("Vui lòng nhập đúng định dạng email")
          .required("Vui lòng không bỏ trống"),
        soDienThoai: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(
            /^(0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
            "Số điện thoại không hợp lệ (phải là số Việt Nam với 10 chữ số)"
          ),
      }),
    });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(loginAnimation)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen grid grid-cols-3 py-10">
      <div className="signIn_animation col-span-2 h-full flex items-center">
        {/* animation  */}
        <Lottie options={defaultOptions} height={700} width={700} />
      </div>
      <div className="signIn_form h-full px-10 flex flex-col justify-between">
        {/* logo and back to homepage  */}
        <div className="flex justify-between items-center">
          <Icons.logo />
          <Link to={pathDefault.homePage}>
            <ArrowLeftOutlined className="mr-2" />
            Go back
          </Link>
        </div>
        {/* form đăng ký */}
        <div>
          <h1 className="text-4xl font-semibold mb-2">Trang đăng ký</h1>
          <p className="text-gray-400 mb-4">
            Nhập đầy đủ thông tin để đăng ý tài khoản
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="">Tài khoản</label>
              <Input
                name="taiKhoan"
                value={values.taiKhoan}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Vui lòng nhập tài khoản"
              />
              {errors.taiKhoan && touched.taiKhoan && (
                <p className="text-red-500 text-sm mt-1">{errors.taiKhoan}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Mật khẩu</label>
              <Input
                name="password"
                value={values.password}
                onBlur={handleBlur}
                placeholder="Vui lòng nhập mật khẩu"
                onChange={handleChange}
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Nhập lại mật khẩu</label>
              <Input
                name="rePassword"
                value={values.rePassword}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Vui lòng nhập lại mật khẩu"
              />
              {errors.rePassword && touched.rePassword && (
                <p className="text-red-500 text-sm mt-1">{errors.rePassword}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Họ tên</label>
              <Input
                name="hoTen"
                value={values.hoTen}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Vui lòng nhập họ tên"
              />
              {errors.hoTen && touched.hoTen && (
                <p className="text-red-500 text-sm mt-1">{errors.hoTen}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Email</label>
              <Input
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Vui lòng nhập email"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Số điện thoại</label>
              <Input
                name="soDienThoai"
                value={values.soDienThoai}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Vui lòng nhập số điện thoại"
              />
              {errors.soDienThoai && touched.soDienThoai && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.soDienThoai}
                </p>
              )}
            </div>
            <div>
              <ButtonOutline
                type="submit"
                className="w-full !py-4"
                content="Đăng ký"
              />
            </div>
          </form>
        </div>

        {/* footer  */}
        <div className="text-center">
          <span>Đã có tài khoản </span>
          <Link
            to={pathDefault.signIn}
            className="font-medium hover:underline duration-200"
          >
            Đăng nhập tại đây
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
