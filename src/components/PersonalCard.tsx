import { Grid, Typography } from "@mui/material";
import { SocialMediasCard } from "./SocialMediasCard";

type PersonalCardProps = {
  description: string;
  phrase: string;
  subtitle: string;
  country: string;
};

export const PersonalCard = (props: PersonalCardProps) => {
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
          textTransform={"uppercase"}
        >
          {props.subtitle}
        </Typography>
        <Typography fontSize={15} align="justify" color={"grey"}  fontWeight={'bold'} >
          {props.description}
        </Typography>
        <Typography fontSize={12} marginBottom={2}>
          #React #Frontend #Dota2
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
            Campina Grande, PB {props.country}
          </Typography>
        </Grid>

        <Typography fontSize={10} align="center" fontStyle={"italic"}>
          {props.phrase}
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
