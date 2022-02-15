import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import colors from "../utils/colors";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu({ emoji }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{ fontSize: 28 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {emoji}
      </Button>
      <Menu
        id="basic-menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            minWidth: 280,
            boxShadow: "none",
          },
          "& .MuiMenu-list": {
            padding: "2px",
            display: "flex",
            flexDirection: "column",
            gap: "1px",
          },
          "& .MuiMenuItem-root": {
            p: "10.5px 21px",
            // border: "1px solid black",
            boxShadow: "0 0 0 1px rgba(0,0,0,1)",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate("/profile")}>
          <MenuText>마이페이지</MenuText>
        </MenuItem>
        <MenuItem onClick={() => navigate("/order")}>
          <MenuText>주문내역</MenuText>
        </MenuItem>
        <MenuItem onClick={() => navigate("/setting")}>
          <MenuText>프로필설정</MenuText>
        </MenuItem>
        <MenuItem onClick={() => navigate("/help")}>
          <MenuText>고객센터</MenuText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          <MenuText color={colors.red}>로그아웃</MenuText>
        </MenuItem>
      </Menu>
    </div>
  );
}

const MenuText = styled.h1`
  font-family: "BM-Air";
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.color};
`;
