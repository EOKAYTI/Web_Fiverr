import { useRoutes } from "react-router-dom";
import { pathDefault } from "./common/path";

import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { createContext, Suspense } from "react";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import HomePage from "./pages/HomeTemplate/HomePage";
import SearchPage from "./pages/HomeTemplate/SearchPage";

export const NotificationContext = createContext();

const HomeTemplate = React.lazy(() =>
  import("./templates/HomeTemplate/HomeTemplate")
);
const ManagerJob = React.lazy(() => import("./pages/ManagerJob/ManagerJob"));
const ManagerComment = React.lazy(() =>
  import("./pages/ManagerComment/ManagerComment")
);
const ManagerUser = React.lazy(() => import("./pages/ManagerUser/ManagerUser"));

const arrRoutes = [
  {
    // chỉ cần dấu / là trang homePage
    path: pathDefault.homePage,
    element: (
      <Suspense fallback={<div>Loading ...</div>}>
        <HomeTemplate />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      ,
      {
        path: "search",
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: pathDefault.signIn,
    element: <SignIn />,
  },
  {
    path: pathDefault.signUp,
    element: <SignUp />,
  },
  {
    path: pathDefault.admin,
    element: <AdminTemplate />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <ManagerUser />
          </Suspense>
        ),
      },
      {
        path: "manager-user",
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <ManagerUser />
          </Suspense>
        ),
      },
      {
        path: "manager-job",
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <ManagerJob />
          </Suspense>
        ),
      },
      {
        path: "manager-comment",
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <ManagerComment />
          </Suspense>
        ),
      },
    ],
  },
];

function App() {
  const routes = useRoutes(arrRoutes);

  const handleNotification = (type, content, timeClose = 3000) => {
    toast[type](content, {
      position: "top-right",
      autoClose: timeClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    // toast.error || toast.success || toast.warning || toast.info
  };

  return (
    <>
      <NotificationContext.Provider value={handleNotification}>
        {routes}
        <ToastContainer />
      </NotificationContext.Provider>
    </>
  );
}

export default App;
