import { Grid, Typography } from "@mui/material";

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
  return (
    <>
      <Typography fontSize={25} fontWeight={"bolder"} marginBottom={2}>
        {props.firstTopic}
      </Typography>
      <Typography
        align="justify"
        color={"grey"}
        fontSize={15}
        marginBottom={2}
        fontWeight={"bold"}
      >
        {props.firstParagraph}
      </Typography>
      <Typography
        align="justify"
        color={"grey"}
        fontSize={15}
        marginBottom={2}
        fontWeight={"bold"}
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
        <Grid item xs={1}>
          <img src="icons/dev.svg" style={{ width: 40 }} />
        </Grid>
        <Grid item xs={9}>
          <Typography>{props.fistCardTitle}</Typography>
          <Typography fontSize={12} color={"grey"} align="justify">
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
        <Grid item xs={1}>
          <img src="icons/design.svg" style={{ width: 40 }} />
        </Grid>
        <Grid item xs={9}>
          <Typography>Web Design</Typography>
          <Typography fontSize={12} color={"grey"} align="justify">
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
        <Grid item xs={1}>
          <img src="icons/app.svg" style={{ width: 40 }} />
        </Grid>
        <Grid item xs={9}>
          <Typography>{props.thirdCardTitle}</Typography>
          <Typography fontSize={12} color={"grey"} align="justify">
            {props.thirdCard}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
