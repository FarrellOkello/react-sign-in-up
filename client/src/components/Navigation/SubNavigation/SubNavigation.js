import { NavLink, Outlet } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { RiAdminFill } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";
import { MdOutlineCastForEducation } from "react-icons/md";

import { styles, useStyles } from "./styles.js";
import { useAuthContext } from "context/AuthProvider.js";

const SubNavigation = ({ allowedRoles }) => {
  const classes = useStyles();
  const { auth } = useAuthContext();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <NavLink to="courses" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          <MdOutlineCastForEducation style={styles.linkIcon} />
          Universities & Courses available
        </NavLink>
        <NavLink to="employees" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          <ImDatabase style={styles.linkIcon} />
          Employees
        </NavLink>

        {auth?.roles.find((role) => allowedRoles.includes(role)) && (
          <NavLink to="subscribers" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            <RiAdminFill style={styles.linkIcon} />
            Subscribers
          </NavLink>
        )}

        {auth?.roles.find((role) => allowedRoles.includes(role)) && (
          <NavLink to="students" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            <RiAdminFill style={styles.linkIcon} />
            Students
          </NavLink>
        )}
        {auth?.roles.find((role) => allowedRoles.includes(role)) && (
          <NavLink to="parents" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            <RiAdminFill style={styles.linkIcon} />
            Parents
          </NavLink>
        )}
         {auth?.roles.find((role) => allowedRoles.includes(role)) && (
          <NavLink to="academicperformances" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            <RiAdminFill style={styles.linkIcon} />
            Academic Performances
          </NavLink>
        )}
      </AppBar>
      <Outlet />
    </>
  );
};

export default SubNavigation;
