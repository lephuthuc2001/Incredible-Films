import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import MovieIcon from "@mui/icons-material/Movie";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export default function Navigator({ film, genre }) {
  const navigate = useNavigate();
  return (
    <div
      role="presentation"
      style={{
        marginTop: "15px",
        width: "1024px",
        maxWidth: "95%",
        paddingLeft: "16px",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          label="Home"
          icon={<HomeIcon fontSize="small" />}
          onClick={() => {
            navigate("/");
          }}
        />
        {genre && (
          <StyledBreadcrumb
            label={genre}
            onClick={() => {
              navigate(-1);
            }}
            icon={<MovieFilterIcon fontSize="small" />}
          />
        )}
        <StyledBreadcrumb
          icon={<MovieIcon fontSize="small" />}
          label={film}
          deleteIcon={<ExpandMoreIcon />}
        />
      </Breadcrumbs>
    </div>
  );
}
