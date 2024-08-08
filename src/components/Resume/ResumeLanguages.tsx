import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Grid, Typography } from "@mui/material";

type ResuseLanguagesProps = {
  resumeLanguageTitle: string;
  resumeLanguageFirstTitle: string;
  resumeLanguageFirstSubtitle: string;
  resumeLanguageFirstDescription: string;
  resumeLanguageSecondTitle: string;
  resumeLanguageSecondSubtitle: string;
  resumeLanguageSecondDescription: string;
};

export const ResumeLanguages = (props: ResuseLanguagesProps) => {
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
          <img src="/icons/language.svg" style={{ width: 25 }} />
        </Grid>
        <Typography fontSize={25} fontWeight={"bolder"} marginBottom={2}>
          {props.resumeLanguageTitle}
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
              {props.resumeLanguageFirstTitle}
            </Typography>
            <Typography fontSize={12} color={"grey"} fontWeight={"bold"}>
              {props.resumeLanguageFirstSubtitle}
            </Typography>
            <Typography width={600} fontSize={15}>
              {props.resumeLanguageFirstDescription}
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
              {props.resumeLanguageSecondTitle}
            </Typography>
            <Typography fontSize={12} color={"grey"} fontWeight={"bold"}>
              {props.resumeLanguageSecondSubtitle}
            </Typography>
            <Typography width={600} fontSize={15}>
              {props.resumeLanguageFirstDescription}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};
