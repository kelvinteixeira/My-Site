import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Grid } from "@mui/material";
import { PersonalProjects } from "./PersonalProjects";
import { ProfessionalProjects } from "./ProfessionalProjects";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type TabProjectsProps = {
  projectPersonalFirstTab: string;
  projectPersonalSecondTab: string;
  projectPersonalFirstTitle: string;
  projectPersonalFirstIDescription: string;
  projectPersonalFirstILink: string;
  projectPersonalSecondTitle: string;
  projectPersonalSecondIDescription: string;
  projectPersonalSecondILink: string;
  projectProfessionalFirstTitle: string;
  projectProfessionalFirstIDescription: string;
  projectProfessionalFirstILink: string;
  projectProfessionalSecondTitle: string;
  projectProfessionalSecondIDescription: string;
  projectProfessionalSecondILink: string;
};

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

export const TabProjects = (props: TabProjectsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Box
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
          >
            <Tab
              sx={{ fontSize: 11, color: "#fff" }}
              label={props.projectPersonalFirstTab}
              {...a11yProps(0)}
            />
            <Tab
              sx={{ fontSize: 11, color: "#fff" }}
              label={props.projectPersonalSecondTab}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
      </Grid>
      <CustomTabPanel value={value} index={0}>
        <PersonalProjects
          projectPersonalFirstTitle={props.projectPersonalFirstTitle}
          projectPersonalFirstIDescription={
            props.projectPersonalFirstIDescription
          }
          projectPersonalFirstILink={props.projectPersonalFirstILink}
          projectPersonalSecondTitle={props.projectPersonalSecondTitle}
          projectPersonalSecondIDescription={
            props.projectPersonalSecondIDescription
          }
          projectPersonalSecondILink={props.projectPersonalSecondILink}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ProfessionalProjects
          projectProfessionalFirstTitle={props.projectProfessionalFirstTitle}
          projectProfessionalFirstIDescription={
            props.projectProfessionalFirstIDescription
          }
          projectProfessionalFirstILink={props.projectProfessionalFirstILink}
          projectProfessionalSecondTitle={props.projectProfessionalSecondTitle}
          projectProfessionalSecondIDescription={
            props.projectProfessionalSecondIDescription
          }
          projectProfessionalSecondILink={props.projectProfessionalSecondILink}
        />
      </CustomTabPanel>
    </>
  );
};
