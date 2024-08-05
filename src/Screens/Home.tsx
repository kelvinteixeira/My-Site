import { Grid } from "@mui/material";
import { PersonalCard } from "../components/PersonalCard";
import { Panel } from "../components/Panel";

export const Home = () => {
  return (
    <>
      <img src="images/waves.svg" style={{ position: "absolute" }} />
      <Grid container spacing={2} padding={5}>
        <Grid item xs={3}>
          <PersonalCard />
        </Grid>
        <Grid item xs={9}>
          <Panel />
        </Grid>
      </Grid>
    </>
  );
};
