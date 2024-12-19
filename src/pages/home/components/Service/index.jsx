import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookIcon from "@mui/icons-material/Book";

const FeaturesGrid = () => {
  return (
    <Box
      maxWidth={"1440px"}
      margin={"0 auto"}
      sx={{ backgroundColor: "#0F172A", py: "45px", borderRadius: "8px" }}
    >
      <Grid container spacing={3}>
        {/* Birinchi blok */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              border: "1px solid #2A3444",
              borderRadius: "8px",
            }}
          >
            <CampaignIcon sx={{ fontSize: 40, color: "#10B981" }} />
            <Typography color="white">
              Все лучшие коллекции non fiction книг и образовательные саммари
              всегда под рукой.
            </Typography>
          </Box>
        </Grid>

        {/* Ikkinchi blok */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              border: "1px solid #2A3444",
              borderRadius: "8px",
            }}
          >
            <CalendarMonthIcon sx={{ fontSize: 40, color: "#10B981" }} />
            <Typography color="white">
              Аудиокниги по дороге на работу и обратно, подарят вам почти месяц
              чтения за год.
            </Typography>
          </Box>
        </Grid>

        {/* Uchinchi blok */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              border: "1px solid #2A3444",
              borderRadius: "8px",
            }}
          >
            <MenuBookIcon sx={{ fontSize: 40, color: "#10B981" }} />
            <Typography color="white">
              Аудиокниги позволяют читать несколько часов в день без отрыва от
              текущих дел.
            </Typography>
          </Box>
        </Grid>

        {/* To'rtinchi blok */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              border: "1px solid #2A3444",
              borderRadius: "8px",
            }}
          >
            <BookIcon sx={{ fontSize: 40, color: "#10B981" }} />
            <Typography color="white">
              Лучшие книги и аудиоспектакли в живом исполнении.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesGrid;
