import React, { useEffect, useState } from "react";
import Banner from "../../components/banner";
import bannerGirl from "../../assets/bannerGirl.png";
import { Box, Button, Grid, Typography } from "@mui/material";
import ProductCart from "../../components/ProductCart";
import { useAxios } from "../../hooks/useAxios";
import { Collections } from "@mui/icons-material";
import collections1 from "../../assets/collections1.png";
import collections2 from "../../assets/collections2.png";
import collections3 from "../../assets/collections3.png";
import collections4 from "../../assets/collections4.png";
import FeaturesGrid from "./components/Service";
import netflix from "../../assets/netflix.png";
import amazon from "../../assets/amazon.png";
import avon from "../../assets/avon.png";
import auditeriya from "../../assets/auditeriya.png";
import dell from "../../assets/dell.png";
import Brends from "./components/Brends";

const Home = () => {
  const { getData } = useAxios();

  const [newData, setNewData] = useState();
  useEffect(() => {
    getData("new").then((res) => setNewData(res.data));
  }, []);

  const [popularData, setPopularData] = useState();
  useEffect(() => {
    getData("popular").then((res) => setPopularData(res.data));
  }, []);

  const [categoryData, setCategoryData] = useState();
  useEffect(() => {
    getData("category").then((res) => setCategoryData(res.data));
  }, []);

  return (
    <>
      <div>
        <div>
          <Banner
            img={bannerGirl}
            title={"Книги, которые вам хочется слушать"}
            discription={
              "Лучшая подборка аудиокниг по психологиии саморазвитию за все годы издательства..."
            }
          />
        </div>

        <Box sx={{ bgcolor: "#0F172A" }}>
          <Box
            maxWidth={"1440px"}
            margin={"0 auto"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box marginTop={10}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight={"bold"}
                  mb={3}
                >
                  Новинки
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "30px",
                    height: "42px",
                    padding: "12px 20px",
                  }}
                  color="success"
                >
                  Смотреть все
                </Button>
              </Box>
              <Grid container spacing={2} alignItems={"center"}>
                {newData?.map((item) => (
                  <Grid item sm={12} md={6} lg={2.4} key={item.id}>
                    <ProductCart
                      img={item.img}
                      author={item.author}
                      title={item.title}
                      id={item.id}
                      path={"new"}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box marginTop={10}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight={"bold"}
                  mb={3}
                >
                  Популярное
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "30px",
                    height: "42px",
                    padding: "12px 20px",
                  }}
                  color="success"
                >
                  Смотреть все
                </Button>
              </Box>
              <Grid container spacing={2} alignItems={"center"}>
                {popularData?.map((item) => (
                  <Grid item sm={12} md={6} lg={2.4} key={item.id}>
                    <ProductCart
                      img={item.img}
                      author={item.author}
                      title={item.title}
                      id={item.id}
                      path={"popular"}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box marginTop={10}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight={"bold"}
                  mb={3}
                >
                  Выбор редакции
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "30px",
                    height: "42px",
                    padding: "12px 20px",
                  }}
                  color="success"
                >
                  Выбрать книгу
                </Button>
              </Box>
              <Grid container spacing={2} alignItems={"center"}>
                {categoryData?.map((item) => (
                  <Grid item sm={12} md={6} lg={2.4} key={item.id}>
                    <ProductCart
                      img={item.img}
                      author={item.author}
                      title={item.title}
                      id={item.id}
                      path={"category"}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            
            <Box marginTop={10}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight={"bold"}
                  mb={3}
                >
                  Новинки Популярное Выбор редакции
                </Typography>
              </Box>
              <Grid container spacing={2} alignItems={"center"}>
                {categoryData?.map((item) => (
                  <Grid item sm={12} md={6} lg={2.4} key={item.id}>
                    <ProductCart
                      img={item.img}
                      author={item.author}
                      title={item.title}
                      id={item.id}
                      path={"category"}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box marginTop={10}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight={"bold"}
                  mb={3}
                >
                  Популярное
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "30px",
                    height: "42px",
                    padding: "12px 20px",
                  }}
                  color="success"
                >
                  Смотреть все
                </Button>
              </Box>
              <Grid container spacing={2} alignItems={"center"}>
                {popularData?.map((item) => (
                  <Grid item sm={12} md={6} lg={2.4} key={item.id}>
                    <ProductCart
                      img={item.img}
                      author={item.author}
                      title={item.title}
                      id={item.id}
                      path={"popular"}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

          <Box maxWidth={"1440px"} margin={"0 auto"} marginTop={10}>
            {/* Sarlavha qismi */}
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h4" color="white" fontWeight="bold" mb={4}>
                Подборки
              </Typography>
            </Box>

            {/* Grid container */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <img
                  src={collections1}
                  alt="Collection 1"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <img
                  src={collections2}
                  alt="Collection 2"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <img
                  src={collections3}
                  alt="Collection 3"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <img
                  src={collections4}
                  alt="Collection 4"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <FeaturesGrid />

          <Box sx={{ padding: 3 }} maxWidth={"1440px"} margin={"0 auto"} justifyContent={"space-between"}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <Brends img={netflix} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <Brends img={amazon} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <Brends img={avon} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <Brends img={auditeriya} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.4}>
                <Brends img={dell} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
