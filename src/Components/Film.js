import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
function Film({ posterImg, title, popularity, release_date, id }) {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardActionArea
          onClick={() => {
            navigate(`/filmDetails/${id}`);
          }}
        >
          <CardMedia component="img" image={posterImg} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              {`${title} (${release_date})`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Film;
