import React from 'react'


const Collections = () => {
  return (
    <div>
        <Box marginTop={10}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant="h4"
                  color="white"
                  fontWeight={"bold"}
                  mb={3}
                >
                  Новинки    Популярное    Выбор редакции
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
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
    </div>
  )
}

export default Collections