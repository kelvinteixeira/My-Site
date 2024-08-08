import { Grid, LinearProgress, Typography } from "@mui/material";
import { skills } from "../../services/api";

type ResumeSkillProps = {
  resumeHardSkillTitle: string;
};

export const ResumeSkills = (props: ResumeSkillProps) => {
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
            marginBottom: 3,
          }}
        >
          <img src="/icons/skills.svg" style={{ width: 30 }} />
        </Grid>
        <Typography fontSize={25} fontWeight={"bolder"} marginBottom={2}>
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
            <Grid>
              <img src={skill.badge} style={{ width: 35 }} />
            </Grid>
            <Grid item xs={10}>
              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{
                  width: "auto",
                  height: 10,
                  borderRadius: 2,
                  color: "#fff",
                }}
              />
            </Grid>
            <Grid item>
              <Typography>{skill.value}%</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
