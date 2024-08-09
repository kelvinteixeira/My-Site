import { Grid, LinearProgress, Typography } from "@mui/material";
import { skills } from "../../services/api";
import { useResponsiveLayout } from "../../hooks/useResponsiveLayout";

type ResumeSkillProps = {
  resumeHardSkillTitle: string;
};

export const ResumeSkills = (props: ResumeSkillProps) => {
  const { isSmall, isExtraSmall, isMedium, getFontSize } =
    useResponsiveLayout();
  return (
    <>
      <Grid container alignItems={"center"} marginBottom={3}>
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
          <img src="/icons/skills.svg" style={{ width: 25 }} />
        </Grid>
        <Typography fontSize={isExtraSmall ? 15 : 25} fontWeight={"bolder"}>
          {props.resumeHardSkillTitle}
        </Typography>
      </Grid>
      <Grid
        item
        container
        padding={2}
        xs={12}
        className="glass"
        marginBottom={2}
        sx={{
          borderRadius: 5,
        }}
      >
        {skills.map((skill) => (
          <Grid
            container
            justifyContent={"space-around"}
            alignItems={"center"}
            key={skill.title}
          >
            <Grid item xs={1}>
              <img src={skill.badge} style={{ width: isExtraSmall ? 25 : 35 }} />
            </Grid>
            <Grid item xs={isExtraSmall ? 6 : 9}>
              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{
                  width: "auto",
                  height:isExtraSmall ? 5 : 10,
                  borderRadius: 2,
                  color: "#fff",
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <Typography fontSize={isExtraSmall ? 12 : 25}>{skill.value}%</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
