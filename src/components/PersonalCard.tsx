import { Grid, Typography } from "@mui/material";
import { SocialMediasCard } from "./SocialMediasCard";

export const PersonalCard = () => {
  return (
    <>
      <Grid
        container
        direction={"column"}
        className="glass"
        padding={2}
        sx={{
          borderRadius: 5,
        }}
      >
        <img src="images/myPhoto.svg" />
        <Typography fontSize={25} align="center">
          Kelvin Teixeira
        </Typography>
        <Typography
          fontSize={10}
          align="center"
          sx={{ letterSpacing: 4 }}
          marginBottom={2}
          color={"#f9a72e"}
        >
          DESENVOLVEDOR FULL STACK
        </Typography>
        <Typography
          fontSize={15}
          align="justify"
          marginBottom={2}
          color={"grey"}
        >
          Graduando em Análise e desenvolvimento de sistemas, amante da
          tecnologia e gamer.{" "}
          <span style={{ fontSize: 12 }} className="highlight">
            #React #Frontend #Dota2
          </span>
        </Typography>

        <SocialMediasCard />

        <Grid container gap={1} alignItems={"center"} marginBottom={2}>
          <img src="icons/email.svg" style={{ width: 30 }} />
          <Typography
            fontSize={12}
            sx={{ bgcolor: "#f9a82e93", padding: 0.5, borderRadius: 2 }}
          >
            kelvin.teixeira.dev@gmail.com
          </Typography>
        </Grid>
        <Grid container gap={1} alignItems={"center"} marginBottom={2}>
          <img src="icons/phone.svg" style={{ width: 30 }} />
          <Typography
            fontSize={12}
            sx={{ bgcolor: "#f9a82e93", padding: 0.5, borderRadius: 2 }}
          >
            +55 83 99615-7313
          </Typography>
        </Grid>
        <Grid container gap={1} alignItems={"center"} marginBottom={2}>
          <img src="icons/location.svg" style={{ width: 30 }} />
          <Typography
            fontSize={12}
            sx={{ bgcolor: "#f9a82e93", padding: 0.5, borderRadius: 2 }}
          >
            Campina Grande, PB Brasil
          </Typography>
        </Grid>

        <Typography fontSize={10} align="center" fontStyle={"italic"}>
          "Palavras são na minha não tão humilde opnião nossa inesgotavel fonte
          de magia, capazes de causa grande injuria ou curar".
        </Typography>
        <Typography
          fontSize={12}
          align="right"
          color={"#f9a72e"}
          marginBottom={2}
        >
          Albus Dumbledore
        </Typography>
      </Grid>
    </>
  );
};
