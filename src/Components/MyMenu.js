import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyMenu({ menuName, menuItems }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();
  const handleClose = (genreId, genreName) => {
    setAnchorEl(null);
    if (
      genreName !== "backdropClick" &&
      genreName !== "escapeKeyDown" &&
      genreName !== "tabKeyDown"
    )
      navigate(`genre/${genreId}`, {
        state: { type: "genre", title: genreName },
      });
  };

  const ITEM_HEIGHT = 48;
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "white",
        }}
      >
        {menuName}
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={Math.random().toString(36).substring(5)}
            divider
            onClick={() => handleClose(item.id, item.name)}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
