import { Grid, Typography } from "@mui/material";
import { SocialMediasCard } from "./SocialMediasCard";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

type PersonalCardProps = {
  description: string;
  phrase: string;
  subtitle: string;
  country: string;
};

export const PersonalCard = (props: PersonalCardProps) => {
  const { getFontSize, isSmall, isExtraSmall, isMedium } =
    useResponsiveLayout();
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
        <Grid container justifyContent={"center"}>
          <img
            src="images/myPhoto.svg"
            style={{
              width: isSmall || isExtraSmall ? 200 : isMedium ? 250 : 300,
            }}
          />
        </Grid>
        <Typography
          variant="h1"
          align="center"
          sx={{ fontSize: `${getFontSize(2)}rem` }}
        >
          Kelvin Teixeira
        </Typography>
        <Typography
          align="center"
          marginBottom={2}
          color={"#f9a72e"}
          variant="h2"
          sx={{ fontSize: `${getFontSize(1.6)}rem` }}
        >
          {props.subtitle}
        </Typography>
        <Typography
          variant="h3"
          align="justify"
          color={"grey"}
          fontWeight={"bold"}
          marginBottom={1}
          sx={{ fontSize: `${getFontSize(1.6)}rem` }}
        >
          {props.description}
        </Typography>
        <Typography
          variant="h4"
          marginBottom={2}
          sx={{ fontSize: `${getFontSize(1.4)}rem` }}
        >
          #React #Frontend #Dota2
        </Typography>

        <SocialMediasCard />

        <Grid container gap={1} alignItems={"center"} marginBottom={2}>
          <img
            src="icons/email.svg"
            style={{ width: isExtraSmall ? 20 : 30 }}
          />
          <Typography
            variant="h6"
            sx={{
              bgcolor: "#f9a82e93",
              padding: 0.5,
              borderRadius: 2,
              fontSize: `${getFontSize(1)}rem`,
            }}
          >
            kelvin.teixeira.dev@gmail.com
          </Typography>
        </Grid>
        <Grid container gap={1} alignItems={"center"} marginBottom={2}>
          <img
            src="icons/phone.svg"
            style={{ width: isExtraSmall || isSmall ? 20 : 30 }}
          />
          <Typography
            variant="h6"
            sx={{
              bgcolor: "#f9a82e93",
              padding: 0.5,
              borderRadius: 2,
              fontSize: `${getFontSize(1)}rem`,
            }}
          >
            +55 83 99615-7313
          </Typography>
        </Grid>
        <Grid container gap={1} alignItems={"center"} marginBottom={2}>
          <img
            src="icons/location.svg"
            style={{ width: isExtraSmall || isSmall ? 20 : 30 }}
          />
          <Typography
            variant="h6"
            sx={{
              bgcolor: "#f9a82e93",
              padding: 0.5,
              borderRadius: 2,
              fontSize: `${getFontSize(1)}rem`,
            }}
          >
            Campina Grande, PB {props.country}
          </Typography>
        </Grid>

        <Typography
          variant="h6"
          marginBottom={1}
          align="center"
          fontStyle={"italic"}
          sx={{ fontSize: `${getFontSize(1)}rem` }}
        >
          {props.phrase}
        </Typography>
        <Typography
          variant="h6"
          align="right"
          color={"#f9a72e"}
          marginBottom={2}
          sx={{ fontSize: `${getFontSize(1)}rem` }}
        >
          Albus Dumbledore
        </Typography>
      </Grid>
    </>
  );
};
