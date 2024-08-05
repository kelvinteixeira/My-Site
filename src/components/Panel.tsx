import { Grid } from "@mui/material";
import { PanelTabs } from "./PanelTabs";

export const Panel = () => {
  return (
    <Grid
      className="glass"
      height={"100%"}
      padding={2}
      sx={{
        borderRadius: 5,
      }}
    >
      <PanelTabs />
    </Grid>
  );
};
