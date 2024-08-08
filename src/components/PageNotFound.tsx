import { Grid, Typography } from "@mui/material";

export const PageNotFound = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Grid
        container
        direction={"column"}
        width={'auto'}
        justifyContent={"center"}
        alignItems={"center"}
        className="glass"
        padding={5}
        sx={{
          borderRadius: 5,
        }}
      >
        <img src="icons/warning.svg" style={{ width: 100 }} />
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Typography fontSize={40}>Error</Typography>
          <img src="icons/404.svg" style={{ width: 200 }} />
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="/icons/sadface.svg" style={{ width: 25, marginRight: 5 }} />

          <Typography>Sorry, Page not found</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
