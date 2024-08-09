import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Grid, Typography } from "@mui/material";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";

type ResumeAcademicProps = {
  resumeAcademicTitle: string;
  resumeAcademicFirstTitle: string;
  resumeAcademicFirstSubtitle: string;
  resumeAcademicFirstDescription: string;
  resumeAcademicSecondTitle: string;
  resumeAcademicSecondSubtitle: string;
  resumeAcademicSecondDescription: string;
};

export const ResumeAcademic = (props: ResumeAcademicProps) => {
  const { isSmall, isExtraSmall, isMedium, getFontSize } =
    useResponsiveLayout();
  return (
    <>
      <Grid container alignItems={"center"}>
        <Grid
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
          <img src="/icons/school.svg" style={{ width: 30 }} />
        </Grid>
        <Typography
          fontSize={isExtraSmall ? 15 : 25}
          fontWeight={"bolder"}
        >
          {props.resumeAcademicTitle}
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
              {props.resumeAcademicFirstTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: `${getFontSize(
                  isSmall || isExtraSmall ? 0.6 : 1.8
                )}rem`,
              }}
              color={"grey"}
              fontWeight={"bold"}
            >
              2018 / 2020 -{" "}
              <Typography
                sx={{
                  fontSize: `${getFontSize(
                    isSmall || isExtraSmall ? 0.6 : 1.8
                  )}rem`,
                }}
                component={"span"}
                variant="overline"
              >
                {props.resumeAcademicFirstSubtitle}
              </Typography>
            </Typography>
            <Typography
              width={isExtraSmall ? 200 : isSmall || isMedium ? 400 : 600}
              sx={{
                fontSize: `${getFontSize(
                  isSmall || isExtraSmall ? 1 : 1.8
                )}rem`,
              }}
            >
              {props.resumeAcademicFirstDescription}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem sx={{ width: 10 }}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {props.resumeAcademicSecondTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: `${getFontSize(
                  isSmall || isExtraSmall ? 0.6 : 1.8
                )}rem`,
              }}
              color={"grey"}
              fontWeight={"bold"}
            >
              2021 -{" "}
              <Typography
                sx={{
                  fontSize: `${getFontSize(
                    isSmall || isExtraSmall ? 0.6 : 1.8
                  )}rem`,
                }}
                component={"span"}
                variant="overline"
              >
                {props.resumeAcademicSecondSubtitle}
              </Typography>
            </Typography>
            <Typography
              width={isExtraSmall ? 200 : isSmall || isMedium ? 400 : 600}
              sx={{
                fontSize: `${getFontSize(
                  isSmall || isExtraSmall ? 1 : 1.8
                )}rem`,
              }}
            >
              {props.resumeAcademicSecondDescription}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};
