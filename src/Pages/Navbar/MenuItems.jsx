import {
  Message,
  DarkMode,
  LightMode,
  Help,
  LoginRounded,
  ContactSupport,
  TaskAltRounded,
  Logout,
} from "@mui/icons-material";
import { setMode, setLogout, setHelp } from "state";
import {
  IconButton,
  Select,
  MenuItem,
  FormControl,
  Typography,
  InputBase,
  Tooltip,
  Button,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const MenuItems = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const user = useSelector((s) => s.user);
  return (
    <>
      <IconButton gap={"1rem"} onClick={() => dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <Tooltip title="switch to light mode">
            <LightMode sx={{ fontSize: "25px" }} />
          </Tooltip>
        ) : (
          <Tooltip title="switch to dark mode">
            <DarkMode sx={{ fontSize: "25px", color: dark }} />
          </Tooltip>
        )}
      </IconButton>
      {user ? (
        <IconButton
          onClick={() => {
            navigate("/");
          }}
        >
          <Logout
            onClick={() => {
              dispatch(setLogout());
              navigate("/");
            }}
          />
        </IconButton>
      ) : (
        <>
          <IconButton
            onClick={() => {
              navigate("/login");
            }}
          >
            <Tooltip title="login">
              <LoginRounded sx={{ cursor: "pointer" }} />
            </Tooltip>
          </IconButton>
        </>
      )}
    </>
  );
};

export default MenuItems;
