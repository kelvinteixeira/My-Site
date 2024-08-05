import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { AboutMe } from "./AboutMe";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const PanelTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderSwitch = (value: number) => {
    const titles = ["Sobre mim", "Currículo", "Portfólio", "Contato"];
    return (
      <Typography
        key={value} // Adiciona a chave para reiniciar a animação
        fontSize={25}
        align="center"
        textTransform={"uppercase"}
        sx={{ letterSpacing: 15 }}
        className="typing-effect"
      >
        {titles[value]}
      </Typography>
    );
  };

  return (
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item xs={5}>
        {renderSwitch(value)}
      </Grid>
      <Box
        className="glass"
        sx={{
          borderBottom: 5,
          borderColor: "divider",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          borderRadius: 5,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          sx={{ borderRadius: 3 }}
        >
          <Tab sx={{ fontSize: 11 }} label="Sobre mim" {...a11yProps(0)} />
          <Tab sx={{ fontSize: 11 }} label="Currículo" {...a11yProps(1)} />
          <Tab sx={{ fontSize: 11 }} label="Portfólio" {...a11yProps(2)} />
          <Tab sx={{ fontSize: 11 }} label="Contato" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <AboutMe/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
    </Grid>
  );
};
