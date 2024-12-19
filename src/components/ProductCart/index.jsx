import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ id, img, author,title ,path}) => {
  return (
    <Box sx={{alignItems: "start",display: "flex", flexDirection: "column" }}>
      <Box>
        <img style={{borderRadius:"32px"}} src={img} alt="cardImg" />
      </Box>
      <Stack gap={2} marginTop={3}>
        <Typography color="#ADADAD">{author}</Typography>
        <Link to={`/singleShop/${path}/${id}`}><Typography width={"70%"} color="white" variant="h6">{title}</Typography></Link>
      </Stack>
    </Box>
  );
};

export default ProductCart;
