import { Card, CardMedia, Grid, Link, Typography } from "@mui/material";

type ProfessionalProjectsProps = {
  projectProfessionalFirstTitle: string;
  projectProfessionalFirstIDescription: string;
  projectProfessionalFirstILink: string;
  projectProfessionalSecondTitle: string;
  projectProfessionalSecondIDescription: string;
  projectProfessionalSecondILink: string;
};

export const ProfessionalProjects = (props: ProfessionalProjectsProps) => {
  return (
    <>
      <Grid container gap={1} justifyContent={"space-around"}>
        <Grid item xs={5}>
          <Link target="_blank" href={props.projectProfessionalFirstILink}>
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
            fontSize={13}
            align="justify"
            marginBottom={1}
          >
            {props.projectProfessionalFirstIDescription}
          </Typography>
          <Link
            target="_blank"
            href={props.projectProfessionalFirstILink}
            underline="hover"
            fontSize={12}
          >
            {props.projectProfessionalFirstILink}
          </Link>
        </Grid>
        <Grid item xs={5}>
          <Link target="_blank" href={props.projectProfessionalSecondILink}>
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
            fontSize={13}
            align="justify"
            marginBottom={1}
          >
            {props.projectProfessionalSecondIDescription}
          </Typography>
          <Link
            target="_blank"
            href={props.projectProfessionalSecondILink}
            underline="hover"
            fontSize={12}
          >
            {props.projectProfessionalSecondILink}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
