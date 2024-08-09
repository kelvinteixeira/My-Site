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
  const { isSmall, isExtraSmall, isMedium, getFontSize } =
    useResponsiveLayout();
  return (
    <>
      <Grid container alignItems={'center'}>
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
        <Typography  fontSize={isExtraSmall ? 15 : 25} fontWeight={"bolder"} >
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
            <Typography  width={isExtraSmall ? 200 : isSmall || isMedium ? 400 : 600} sx={{
                fontSize: `${getFontSize(
                  isSmall || isExtraSmall ? .8 : 1.8
                )}rem`,
              }}>
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
            <Typography  width={isExtraSmall ? 200 : isSmall || isMedium ? 400 : 600} sx={{
                fontSize: `${getFontSize(
                  isSmall || isExtraSmall ? .8 : 1.8
                )}rem`,
              }}>
              {props.resumeLanguageFirstDescription}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};
