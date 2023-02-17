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
function Film({
  posterImg,
  title,
  popularity,
  release_date,
  id,
  genre,
  isReplaced,
}) {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          minHeight: 450,
        }}
      >
        <CardActionArea
          onClick={() => {
            navigate(`/filmDetails/${id}`, {
              replace: isReplaced,
              state: { genre },
            });
          }}
        >
          <CardMedia component="img" image={posterImg} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              {release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Film;
