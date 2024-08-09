import { Card, CardMedia, Grid, Link, Typography } from "@mui/material";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";

type PersonalProjectsProps = {
  projectPersonalFirstTitle: string;
  projectPersonalFirstIDescription: string;
  projectPersonalFirstILink: string;
  projectPersonalSecondTitle: string;
  projectPersonalSecondIDescription: string;
  projectPersonalSecondILink: string;
};

export const PersonalProjects = (props: PersonalProjectsProps) => {
  const {isExtraSmall, isSmall, isMedium, getFontSize} = useResponsiveLayout()
  return (
    <>
      <Grid container gap={1} justifyContent={"space-around"}>
        <Grid item xs={isExtraSmall || isSmall || isMedium ? 12 :5}>
          <Link target="_blank" href={props.projectPersonalFirstILink}>
            <Card
              sx={{
                borderRadius: 5,
                marginBottom: 2,
                 height: isExtraSmall? 100 : 200,
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
            sx={{
              fontSize: `${getFontSize(
                isSmall || isExtraSmall ? 0.7 : 1.5
              )}rem`,
            }}
            align="justify"
            marginBottom={1}
          >
            {props.projectPersonalFirstIDescription}
          </Typography>
          <Link
            target="_blank"
            href={props.projectPersonalFirstILink}
            underline="hover"
            sx={{
              fontSize: `${getFontSize(
                isSmall || isExtraSmall ? 0.5 : 1.6
              )}rem`,
            }}
          >
            {props.projectPersonalFirstILink}
          </Link>
        </Grid>
        <Grid item xs={isExtraSmall || isSmall || isMedium ? 12 :5}>
          <Link target="_blank" href={props.projectPersonalSecondILink}>
            <Card
              sx={{
                borderRadius: 5,
                marginBottom: 2,
                 height: isExtraSmall? 100 : 200,
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
            sx={{
              fontSize: `${getFontSize(
                isSmall || isExtraSmall ? 0.7 : 1.5
              )}rem`,
            }}
            align="justify"
            marginBottom={1}
          >
            {props.projectPersonalSecondIDescription}
          </Typography>
          <Link
            target="_blank"
            href={props.projectPersonalSecondILink}
            underline="hover"
            sx={{
              fontSize: `${getFontSize(
                isSmall || isExtraSmall ? 0.7 : 1.5
              )}rem`,
            }}
          >
            {props.projectPersonalSecondILink}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
