import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Grid, Typography } from "@mui/material";

type ResumeAcademicProps = {
  resumeAcademicTitle: string;
  resumeAcademicFirstTitle: string;
  resumeAcademicFirstSubtitle: string;
  resumeAcademicFirstDescription: string;
  resumeAcademicSecondTitle: string;
  resumeAcademicSecondSubtitle: string;
  resumeAcademicSecondDescription: string;
}

export const ResumeAcademic = (props: ResumeAcademicProps) => {
  return (
    <>
      <Grid container>
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
        <Typography fontSize={25} fontWeight={"bolder"} marginBottom={2}>
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
            <Typography fontSize={12} color={"grey"} fontWeight={"bold"}>
              2018 / 2020 -{" "}
              <Typography component={"span"} variant="overline">
                {props.resumeAcademicFirstSubtitle}
              </Typography>
            </Typography>
            <Typography width={600} fontSize={15}>
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
            <Typography fontSize={12} color={"grey"} fontWeight={"bold"}>
              2021 -{" "}
              <Typography component={"span"} variant="overline">
                {props.resumeAcademicSecondSubtitle}
              </Typography>
            </Typography>
            <Typography width={600} fontSize={15}>
              {props.resumeAcademicSecondDescription}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};
