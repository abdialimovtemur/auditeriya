import React from "react";
import Logo from "../../assets/logo.png";
import { BoltRounded, Search } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      position="fixed"
      sx={{
        width: "100%",
        bgcolor: "rgba(0, 0, 0, 0.5)",
        boxShadow: "none",
        backdropFilter: "blur(10px)",
        zIndex: "10",
      }}
    >
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={2}
          flexWrap="wrap"
        >
          {/* Logo */}
          <Box flex={1} display="flex" alignItems="center">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "40px", objectFit: "contain" }}
            />
          </Box>

          {/* Navigation Links */}
          <Box
            flex={2}
            display={{ xs: "none", sm: "flex" }}
            justifyContent="center"
            alignItems="center"
            gap={4}
          >
            <Typography
              component="a"
              href="#"
              color="white"
              sx={{
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                "&:hover": { color: "#90caf9" },
              }}
            >
              Как купить
            </Typography>
            <Typography
              component="a"
              href="#"
              color="white"
              sx={{
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                "&:hover": { color: "#90caf9" },
              }}
            >
              F.A.Q
            </Typography>
            <Typography
              component="a"
              href="#"
              color="white"
              sx={{
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                "&:hover": { color: "#90caf9" },
              }}
            >
              Контакты
            </Typography>
          </Box>

          {/* Search and Buttons */}
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="flex-end"
            flex={1}
            sx={{
              flexWrap: "wrap",
              "& > *": {
                marginBottom: { xs: "8px", sm: "0" },
              },
            }}
          >
            <Search fontSize="large" sx={{ color: "white" }} />
            <Button
              variant="outlined"
              sx={{
                color: "white",
                border: "2px solid",
                borderRadius: "30px",
                padding: "6px 16px",
                fontSize: "14px",
              }}
            >
              Регистрация
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                padding: "6px 16px",
                fontSize: "14px",
              }}
              color="success"
            >
              Войти
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
