import { Card, CardMedia, Grid, Link, Typography } from "@mui/material";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";

type ProfessionalProjectsProps = {
  projectProfessionalFirstTitle: string;
  projectProfessionalFirstIDescription: string;
  projectProfessionalFirstILink: string;
  projectProfessionalSecondTitle: string;
  projectProfessionalSecondIDescription: string;
  projectProfessionalSecondILink: string;
};

export const ProfessionalProjects = (props: ProfessionalProjectsProps) => {
  const { isExtraSmall, isSmall, isMedium, getFontSize } =
    useResponsiveLayout();

  return (
    <>
      <Grid container gap={1} justifyContent={"space-around"}>
        <Grid item xs={isExtraSmall || isSmall || isMedium ? 12 : 5}>
          <Link target="_blank" href={props.projectProfessionalFirstILink}>
            <Card
              sx={{
                borderRadius: 5,
                marginBottom: 2,
                height: isExtraSmall ? 100 : 200,
                transition: "transform 0.5s ease",
                "&:hover": {
                  border: "2px solid #f9a72e",
                  boxShadow: "0 4px 6px #f9a82e91",
                },
              }}
            >
              <CardMedia
                component={"img"}
                src={"/images/bsProject.png"}
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
            {props.projectProfessionalFirstTitle}
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
            {props.projectProfessionalFirstIDescription}
          </Typography>
          <Link
            target="_blank"
            href={props.projectProfessionalFirstILink}
            underline="hover"
            sx={{
              fontSize: `${getFontSize(
                isSmall || isExtraSmall ? 0.7 : 1.5
              )}rem`,
            }}
          >
            {props.projectProfessionalFirstILink}
          </Link>
        </Grid>
        <Grid item xs={isExtraSmall || isSmall || isMedium ? 12 : 5}>
          <Link target="_blank" href={props.projectProfessionalSecondILink}>
            <Card
              sx={{
                borderRadius: 5,
                marginBottom: 2,
                height: isExtraSmall ? 100 : 200,
                transition: "transform 0.5s ease",
                "&:hover": {
                  border: "2px solid #f9a72e",
                  boxShadow: "0 4px 6px #f9a82e91",
                },
              }}
            >
              <CardMedia
                component={"img"}
                src={"/images/alenilsonProject.png"}
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
            {props.projectProfessionalSecondTitle}
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
            {props.projectProfessionalSecondIDescription}
          </Typography>
          <Link
            target="_blank"
            href={props.projectProfessionalSecondILink}
            underline="hover"
            sx={{
              fontSize: `${getFontSize(
                isSmall || isExtraSmall ? 0.7 : 1.5
              )}rem`,
            }}
          >
            {props.projectProfessionalSecondILink}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
