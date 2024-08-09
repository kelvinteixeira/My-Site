import { Grid, Typography } from "@mui/material";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

type AboutMeProps = {
  firstParagraph: string;
  secondParagraph: string;
  firstTopic: string;
  secondTopic: string;
  fistCardTitle: string;
  thirdCardTitle: string;
  fistCard: string;
  secondCard: string;
  thirdCard: string;
};

export const AboutMe = (props: AboutMeProps) => {
  const { getFontSize, isSmall, isExtraSmall, isMedium } =
    useResponsiveLayout();
  return (
    <>
      <Typography fontSize={25} fontWeight={"bolder"} marginBottom={2}>
        {props.firstTopic}
      </Typography>
      <Typography
        align="justify"
        color={"grey"}
        marginBottom={2}
        fontWeight={"bold"}
        sx={{ fontSize: `${getFontSize(isSmall || isExtraSmall ? 1 : 2)}rem` }}
      >
        {props.firstParagraph}
      </Typography>
      <Typography
        align="justify"
        color={"grey"}
        marginBottom={2}
        fontWeight={"bold"}
        sx={{ fontSize: `${getFontSize(isSmall || isExtraSmall ? 1 : 2)}rem` }}
      >
        {props.secondParagraph}
      </Typography>
      <Typography fontSize={25} fontWeight={"bolder"} marginBottom={4}>
        {props.secondTopic}
      </Typography>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
        xs={12}
        className="glass incrise-size "
        marginBottom={2}
        sx={{
          borderRadius: 5,
          transition: "transform 0.5s ease-in-out",
          "&:hover": {
            animation: "scaleUp 0.5s ease-in-out",
          },
        }}
      >
        <Grid item xs={isSmall || isExtraSmall || isMedium ? 2 : 1}>
          <img src="icons/dev.svg" style={{ width: isExtraSmall ? 25 : 40 }} />
        </Grid>
        <Grid item xs={9}>
          <Typography sx={{
              fontSize: `${getFontSize(isSmall || isExtraSmall ? 1 : 2)}rem`,
            }}>{props.fistCardTitle}</Typography>
          <Typography
             sx={{
              fontSize: `${getFontSize(isSmall || isExtraSmall ? 0.6 : 1.8)}rem`,
            }}
            color={"grey"}
            align="justify"
          >
            {props.fistCard}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
        xs={12}
        className="glass"
        marginBottom={2}
        sx={{
          borderRadius: 5,
          transition: "transform 0.5s ease-in-out",
          "&:hover": {
            animation: "scaleUp 0.5s ease-in-out",
          },
        }}
      >
        <Grid item xs={isSmall || isExtraSmall || isMedium ? 2 : 1}>
          <img src="icons/design.svg" style={{ width: isExtraSmall ? 25 : 40 }} />
        </Grid>
        <Grid item xs={9}>
          <Typography sx={{
              fontSize: `${getFontSize(isSmall || isExtraSmall ? 1 : 2)}rem`,
            }}>Web Design</Typography>
          <Typography
             sx={{
              fontSize: `${getFontSize(isSmall || isExtraSmall ? 0.6 : 1.8)}rem`,
            }}
            color={"grey"}
            align="justify"
          >
            {props.secondCard}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
        xs={12}
        className="glass"
        marginBottom={2}
        sx={{
          borderRadius: 5,
          transition: "transform 0.5s ease-in-out",
          "&:hover": {
            animation: "scaleUp 0.5s ease-in-out",
          },
        }}
      >
        <Grid item xs={isSmall || isExtraSmall || isMedium ? 2 : 1}>
          <img src="icons/app.svg" style={{ width: isExtraSmall ? 25 : 40 }} />
        </Grid>
        <Grid item xs={9}>
          <Typography
            sx={{
              fontSize: `${getFontSize(isSmall || isExtraSmall ? 1 : 2)}rem`,
            }}
          >
            {props.thirdCardTitle}
          </Typography>
          <Typography
            sx={{
              fontSize: `${getFontSize(isSmall || isExtraSmall ? 0.6 : 1.8)}rem`,
            }}
            color={"grey"}
            align="justify"
          >
            {props.thirdCard}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
