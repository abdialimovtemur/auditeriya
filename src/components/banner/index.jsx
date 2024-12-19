import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
// maxWidth={"1440px"}
// margin={"0 auto"}
// width={"95%"}

const Banner = ({ img, title, discription }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: "800px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        backgroundImage: `url(${img})`,
        
      }}
    >
      <Box sx={{
        flexDirection: "row",
        justifyContent: "space-around",
        display: "flex",
      }}>
        <Box
          sx={{
            width: "50%",
            textAlign: "start",
            pr: "16px",
          }}
        >
          <Typography variant="h1" fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography variant="h5">{discription}</Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ borderRadius: "30px", padding: "20px 90px" }}
            color="success"
          >
            Выбрать книгу
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
