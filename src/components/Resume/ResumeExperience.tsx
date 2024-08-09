import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Grid, Typography, Chip } from "@mui/material";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";

type ResumeProfessionalProps = {
  resumeProfessionalTitle: string;
  resumeProfessionalFirstTitle: string;
  resumeProfessionalFirstSubtitle: string;
  resumeProfessionalFirstDescription: string;
  resumeProfessionalSecondTitle: string;
  resumeProfessionalSecondSubtitle: string;
  resumeProfessionalSecondDescription: string;
  resumeProfessionalThirdTitle: string;
  resumeProfessionalThirdSubtitle: string;
  resumeProfessionalThirdDescription: string;
  resumeProfessionalFourthTitle: string;
  resumeProfessionalFourthSubtitle: string;
  resumeProfessionalFourthDescription: string;
  resumeUsedTechnologies: string;
};

export const ResumeExperience = (props: ResumeProfessionalProps) => {
  const { isSmall, isExtraSmall, isMedium, getFontSize } =
    useResponsiveLayout();
  return (
    <>
      <Grid container alignItems={"center"}>
        <Grid
          item
          container
          justifyContent={"center"}
          sx={{
            width: 40,
            height: 40,
            borderRadius: 100,
            bgcolor: "#f9a72e",
            marginRight: 1,
          }}
        >
          <img src="/icons/book.svg" style={{ width: 25 }} />
        </Grid>
          <Typography
            fontSize={isExtraSmall ? 15 : 25}
            fontWeight={"bolder"}
          >
            {props.resumeProfessionalTitle}
          </Typography>
      </Grid>
      <Timeline position="right" sx={{ marginBottom: 2 }}>
        <TimelineItem sx={{ width: 10 }}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {props.resumeProfessionalFirstTitle}
            </Typography>
            <Typography sx={{
                  fontSize: `${getFontSize(
                    isSmall || isExtraSmall ? 0.6 : 1.8
                  )}rem`,
                }} color={"grey"} fontWeight={"bold"}>
              2021 / 2023 -{" "}
              <Typography component={"span"} variant="overline"  sx={{
                  fontSize: `${getFontSize(
                    isSmall || isExtraSmall ? 0.6 : 1.8
                  )}rem`,
                }}>
                {props.resumeProfessionalFirstSubtitle}
              </Typography>
            </Typography>
            <Typography
              width={isExtraSmall ? 200 : isSmall || isMedium ? 400 : 600}
              sx={{
                fontSize: `${getFontSize(
                  isSmall || isExtraSmall ? .8 : 1.8
                )}rem`,
              }}
              marginBottom={1}
            >
              {props.resumeProfessionalFirstDescription}
            </Typography>
            <Typography
              fontSize={12}
              color={"grey"}
              fontWeight={"bold"}
              marginBottom={1}
            >
              {props.resumeUsedTechnologies}
            </Typography>
            <Grid container gap={1}>
              <Chip label="React" size="small" color="primary" />
              <Chip label="TypeScript" size="small" color="primary" />
              <Chip label="Material Ui" size="small" color="primary" />
              <Chip label="Redux" size="small" color="primary" />
              <Chip label="GraphQl" size="small" color="primary" />
              <Chip label="Styled Components" size="small" color="primary" />
              <Chip label="Formik " size="small" color="primary" />
              <Chip label="NodeJs" size="small" color="primary" />
              <Chip label="Jest" size="small" color="primary" />
              <Chip label="Apollo Server" size="small" color="primary" />
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: 10 }}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {props.resumeProfessionalSecondTitle}
            </Typography>
            <Typography sx={{
                  fontSize: `${getFontSize(
                    isSmall || isExtraSmall ? 0.6 : 1.8
                  )}rem`,
                }} color={"grey"} fontWeight={"bold"}>
              2023 -{" "}
              <Typography component={"span"} variant="overline"  sx={{
                  fontSize: `${getFontSize(
                    isSmall || isExtraSmall ? 0.6 : 1.8
                  )}rem`,
                }}>
                {props.resumeProfessionalSecondSubtitle}
              </Typography>
            </Typography>
            <Typography
              width={isExtraSmall ? 200 : isSmall || isMedium ? 400 : 600}
              marginBottom={1}
              sx={{
                fontSize: `${getFontSize(
                  isSmall || isExtraSmall ? .8 : 1.8
                )}rem`,
              }}
            >
              {props.resumeProfessionalSecondDescription}
            </Typography>
            <Typography
              fontSize={12}
              color={"grey"}
              fontWeight={"bold"}
              marginBottom={1}
            >
              {props.resumeUsedTechnologies}
            </Typography>
            <Grid container gap={1}>
              <Chip label="React" size="small" color="primary" />
              <Chip label="TypeScript" size="small" color="primary" />
              <Chip label="Material Ui" size="small" color="primary" />
            </Grid>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ width: 10 }}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {props.resumeProfessionalThirdTitle}
            </Typography>
            <Typography sx={{
                  fontSize: `${getFontSize(
                    isSmall || isExtraSmall ? 0.6 : 1.8
                  )}rem`,
                }} color={"grey"} fontWeight={"bold"}>
              2023 -{" "}
              <Typography component={"span"} variant="overline"  sx={{
                  fontSize: `${getFontSize(
                    isSmall || isExtraSmall ? 0.6 : 1.8
                  )}rem`,
                }}>
                {props.resumeProfessionalThirdSubtitle}
              </Typography>
            </Typography>
            <Typography
              width={isExtraSmall ? 200 : isSmall || isMedium ? 400 : 600}
              sx={{
                fontSize: `${getFontSize(
                  isSmall || isExtraSmall ? .8 : 1.8
                )}rem`,
              }}
              marginBottom={1}
            >
              {props.resumeProfessionalThirdDescription}
            </Typography>
            <Typography
              fontSize={12}
              color={"grey"}
              fontWeight={"bold"}
              marginBottom={1}
            >
              {props.resumeUsedTechnologies}
            </Typography>
            <Grid container gap={1}>
              <Chip label="React" size="small" color="primary" />
              <Chip label="TypeScript" size="small" color="primary" />
              <Chip label="Material Ui" size="small" color="primary" />
              <Chip label="Formik " size="small" color="primary" />
              <Chip label="EmailJs " size="small" color="primary" />
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: 10 }}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {props.resumeProfessionalFourthTitle}
            </Typography>
            <Typography sx={{
                  fontSize: `${getFontSize(
                    isSmall || isExtraSmall ? 0.6 : 1.8
                  )}rem`,
                }} color={"grey"} fontWeight={"bold"}>
              2024 -{" "}
              <Typography component={"span"} variant="overline"  sx={{
                  fontSize: `${getFontSize(
                    isSmall || isExtraSmall ? 0.6 : 1.8
                  )}rem`,
                }}>
                {props.resumeProfessionalFourthSubtitle}
              </Typography>
            </Typography>
            <Typography
              width={isExtraSmall ? 200 : isSmall || isMedium ? 400 : 600}
              sx={{
                fontSize: `${getFontSize(
                  isSmall || isExtraSmall ? .8 : 1.8
                )}rem`,
              }}
              marginBottom={1}
            >
              {props.resumeProfessionalFourthDescription}
            </Typography>
            <Typography
              fontSize={12}
              color={"grey"}
              fontWeight={"bold"}
              marginBottom={1}
            >
              {props.resumeUsedTechnologies}
            </Typography>
            <Grid container gap={1}>
              <Chip label="React" size="small" color="primary" />
              <Chip label="TypeScript" size="small" color="primary" />
              <Chip label="Material Ui" size="small" color="primary" />
            </Grid>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};
