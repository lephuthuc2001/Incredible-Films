import React from "react";
import { Box, Dialog, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const schema = yup
    .object({
      username: yup
        .string()
        .required()
        .min(6, "Username should be at least 6 characters long"),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const Auth = useAuth();

  const onSubmit = (data) => {
    Auth.login(data.username);
    setTimeout(() => {
      navigate("/", {
        replace: true,
      });
    }, 100);
  };

  return (
    <Dialog open={true}>
      <Box sx={{ m: "20px" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div>
            <Controller
              name="username"
              control={methods.control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField variant="outlined" {...field} />
              )}
            />
            <p>{methods.formState.errors?.username?.message}</p>
          </div>
          <Button
            sx={{
              width: "fit-content",
            }}
            variant="contained"
            type="submit"
          >
            Log in{" "}
          </Button>
        </form>
      </Box>
    </Dialog>
  );
}

export default LoginPage;
