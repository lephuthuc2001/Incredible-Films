import { Avatar as MUIAvatar } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function Avatar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const faveFilmsHandler = () => {
    setAnchorEl(null);
    setTimeout(() => {
      navigate("/favorite");
    }, 100);
  };
  const Auth = useAuth();
  const handleLogout = () => {
    setAnchorEl(null);
    Auth.logout();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MUIAvatar
          sx={{
            color: "black",
            backgroundColor: "#FFF0F0",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          {Auth.user[0]}
        </MUIAvatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={faveFilmsHandler}>My Favorite Films</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default Avatar;
