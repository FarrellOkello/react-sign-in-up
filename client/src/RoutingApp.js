import { useRoutes } from "react-router-dom";
import {
  // HomePage,
  // AboutPage,
  SecuredContentPage,
  CoursesPage,
  LoginPage,
  RegisterPage,
  NotFoundPage,
  SecuredPageInfo,
  UpdateEmployee,
  SubscribersDataPage,
  UpdateSubscriber,
  CreateEmployeePage,
  EmployeesDataPage,
} from "pages";
import { MainNavigation, SubNavigation } from "components/Navigation";
import { PersistLogin } from "PersistLogin";
import { RequireAuth } from "RequireAuth";
import AnonymousLayout from "components/Layout/AnonymousLayout";
import StudentsDataPage from "pages/Students/StudentsDataPage/StudentsDataPage";
import CreateStudentPage from "pages/Students/CreateStudentPage/CreateStudentPage";
import { UpdateStudent } from "pages/Students";
import ParentsDataPage from "pages/Parents/ParentsDataPage";
import AcademicPerformanceDataPage from "pages/AcademicPerformances/AcademicPerformanceDataPage";

const ROLES = {
  Admin: 5150,
  Editor: 1984,
  User: 2001,
};

export const RoutesApp = () => {
  const routes = [
    {
      layout: AnonymousLayout,
      element: <LoginPage />,
      path: "/login",
    },
    {
      layout: AnonymousLayout,
      element: <RegisterPage />,
      path: "/register",
    },
    {
      path: "/",
      element: <MainNavigation />,
      children: [
        // { path: "/", element: <HomePage /> },
        // { path: "about", element: <AboutPage /> },
        { path: "unauthorized", element: <SecuredPageInfo /> },
        {
          element: <PersistLogin />,
          children: [
            {
              element: <RequireAuth allowedRoles={[ROLES.User, ROLES.Editor, ROLES.Admin]} />,
              children: [
                {
                  path: "/",

                  element: <SubNavigation allowedRoles={[ROLES.Admin, ROLES.Editor]} />,
                  children: [
                    {
                      path: "/secure-content",
                      element: <SecuredContentPage />,
                    },
                    {
                      path: "/courses",
                      element: <CoursesPage />,
                    },
                    {
                      path: "/employees",
                      element: <EmployeesDataPage />,
                    },
                    {
                      path: "/create-employee",
                      element: <CreateEmployeePage />,
                    },
                    {
                      path: "/update-employee/:id",
                      element: <UpdateEmployee />,
                    },
                    {
                      path: "/students",
                      element: <StudentsDataPage />,
                    },
                    {
                      path: "/create-student",
                      element: <CreateStudentPage />,
                    },
                    {
                      path: "/update-student/:id",
                      element: <UpdateStudent />,
                    },
                    {
                      path: "/parents",
                      element: <ParentsDataPage />,
                    },
                    {
                      path: "/academicperformances",
                      element: <AcademicPerformanceDataPage />,
                    },
                    {
                      element: <RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />,
                      children: [
                        {
                          path: "/subscribers",
                          element: <SubscribersDataPage />,
                        },
                        {
                          path: "/update-subscriber/:id",
                          element: <UpdateSubscriber />,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ];

  return useRoutes(routes);
};
