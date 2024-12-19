import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { Box, Typography, Button, Grid } from "@mui/material";

const SingleShop = () => {
  const { path, id } = useParams();
  const { getData } = useAxios();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(`${path}/${id}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <Box bgcolor="#1E1E1E">
      <Box
        maxWidth={"1440px"}
        margin={"0 auto"}
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
        p={4}
        height="100vh"
        
        color="#FFF"
      >
        {product ? (
          <Grid container spacing={4} maxWidth="1200px">
            {/* Left side: Image */}
            <Grid item xs={12} sm={4}>
              <img
                src={product.img}
                alt={product.title}
                style={{
                  width: "1200px",
                  borderRadius: "8px",
                  border: "1px solid #333",
                }}
              />
            </Grid>

            {/* Right side: Content */}
            <Grid item xs={12} sm={8}>
              <Typography variant="h2" fontWeight={"bold"} gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="subtitle1" color="gray" gutterBottom>
                Avtor: {product.author}
              </Typography>

              <Typography variant="h6" paragraph>
                {product.desc}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ backgroundColor: "#FF9900" }}
              >
                {product.price_current
                  ? `Купить за  ${product.price_current} руб.`
                  : "Sotib olish"}
              </Button>
            </Grid>
          </Grid>
        ) : (
          <p>Mahsulot topilmadi</p>
        )}
      </Box>
    </Box>
  );
};

export default SingleShop;
