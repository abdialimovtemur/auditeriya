import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0b0b0b",
        color: "white",
        padding: "20px 0",
      }}
    >
      <Container maxWidth="xl">
        {/* Upper Section */}
        <Box
          display="flex"
          justifyContent={{ xs: "center", sm: "space-between" }}
          alignItems="flex-start"
          flexWrap="wrap"
          gap={4}
        >
          {/* Logo or Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "28px", // Katta shrift
              textTransform: "uppercase",
            }}
          >
            Аудитория
          </Typography>

          {/* Links Section */}
          <Stack
            direction="row"
            spacing={4}
            flexWrap="wrap"
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            {/* Жанры */}
            <Stack spacing={1}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                Жанры
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Новинки
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Популярные
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Боевик
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Фэнтези
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Все жанры
              </Typography>
            </Stack>

            {/* Категории */}
            <Stack spacing={1}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                Категории
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Популярные
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Новинки
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Выбор редакции
              </Typography>
            </Stack>

            {/* Разделы */}
            <Stack spacing={1}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                Разделы
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Как купить
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Часто задаваемые вопросы
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Соглашение
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{ color: "#a0a0a0", fontSize: "16px" }}
              >
                Контакты
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Bottom Section */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          marginTop={4}
          borderTop="1px solid #333"
          paddingTop={2}
        >
          <Typography
            variant="body2"
            color="#a0a0a0"
            sx={{ fontSize: "16px" }}
          >
            © 2024, «Аудитория». Все права защищены.
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center">
            <Typography
              component="a"
              href="#"
              sx={{ color: "#a0a0a0", fontSize: "16px" }}
            >
              Политика конфиденциальности
            </Typography>
            <Typography
              component="a"
              href="#"
              sx={{ color: "#a0a0a0", fontSize: "16px" }}
            >
              Лицензионное соглашение
            </Typography>
          </Stack>
          <Box display="flex" gap={2}>
            <img
              src="/visa.png"
              alt="Visa"
              style={{ height: "20px", objectFit: "contain" }}
            />
            <img
              src="/mastercard.png"
              alt="Mastercard"
              style={{ height: "20px", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
