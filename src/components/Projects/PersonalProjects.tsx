import { Card, CardMedia, Grid, Link, Typography } from "@mui/material";

type PersonalProjectsProps = {
  projectPersonalFirstTitle: string;
  projectPersonalFirstIDescription: string;
  projectPersonalFirstILink: string;
  projectPersonalSecondTitle: string;
  projectPersonalSecondIDescription: string;
  projectPersonalSecondILink: string;
};

export const PersonalProjects = (props: PersonalProjectsProps) => {
  return (
    <>
      <Grid container gap={1} justifyContent={"space-around"}>
        <Grid item xs={5}>
          <Link target="_blank" href={props.projectPersonalFirstILink}>
            <Card
              sx={{
                borderRadius: 5,
                marginBottom: 2,
                height: 200,
                transition: "transform 0.5s ease",
                cursor: "pointer",
                "&:hover": {
                  border: "2px solid #f9a72e",
                  boxShadow: "0 4px 6px #f9a82e91",
                },
              }}
            >
              <CardMedia
                component={"img"}
                src={"/images/pokedexProject.png"}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              />
            </Card>
          </Link>
          <Typography variant="overline" fontSize={15}>
            {props.projectPersonalFirstTitle}
          </Typography>
          <Typography
            color={"grey"}
            fontSize={13}
            align="justify"
            marginBottom={1}
          >
            {props.projectPersonalFirstIDescription}
          </Typography>
          <Link
            target="_blank"
            href={props.projectPersonalFirstILink}
            underline="hover"
            fontSize={12}
          >
            {props.projectPersonalFirstILink}
          </Link>
        </Grid>
        <Grid item xs={5}>
          <Link target="_blank" href={props.projectPersonalSecondILink}>
            <Card
              sx={{
                borderRadius: 5,
                marginBottom: 2,
                height: 200,
                transition: "transform 0.5s ease",
                "&:hover": {
                  border: "2px solid #f9a72e",
                  boxShadow: "0 4px 6px #f9a82e91",
                },
              }}
            >
              <CardMedia
                component={"img"}
                src={"/images/beetellerProject.png"}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              />
            </Card>
          </Link>
          <Typography variant="overline" fontSize={15}>
            {props.projectPersonalSecondTitle}
          </Typography>
          <Typography
            color={"grey"}
            fontSize={13}
            align="justify"
            marginBottom={1}
          >
            {props.projectPersonalSecondIDescription}
          </Typography>
          <Link
            target="_blank"
            href={props.projectPersonalSecondILink}
            underline="hover"
            fontSize={12}
          >
            {props.projectPersonalSecondILink}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
