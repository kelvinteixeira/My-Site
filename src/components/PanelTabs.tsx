import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { AboutMe } from "./AboutMe";
import { ResumeAcademic } from "./Resume/ResumeAcademic";
import { ResumeExperience } from "./Resume/ResumeExperience";
import { ResumeLanguages } from "./Resume/ResumeLanguages";
import { ResumeSkills } from "./Resume/ResumeSkills";
import { TabProjects } from "./Projects/TabProjects";

interface TabProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type PanelTabsProps = {
  fistTab: string;
  secondTab: string;
  thirdTab: string;
  aboutMeFirstTopic: string;
  aboutMeFirstParagraph: string;
  aboutMeSecondParagraph: string;
  aboutMeSecondTopic: string;
  aboutMeFistCardTitle: string;
  aboutMeFistCard: string;
  aboutMeScondCard: string;
  aboutMeThirdCardTitle: string;
  aboutMeThirdCard: string;
  resumeAcademicTitle: string;
  resumeAcademicFirstTitle: string;
  resumeAcademicFirstSubtitle: string;
  resumeAcademicFirstDescription: string;
  resumeAcademicSecondTitle: string;
  resumeAcademicSecondSubtitle: string;
  resumeAcademicSecondDescription: string;
  resumeProfessionalTitle: string;
  resumeProfessionalFirstTitle: string;
  resumeProfessionalFirstSubtitle: string;
  resumeProfessionalFirstDescription: string;
  resumeProfessionalSecondTitle: string;
  resumeProfessionalSecondSubtitle: string;
  resumeProfessionalSecondDescription: string;
  resumeProfessionalThirdTitle: string;
  resumeProfessionalThirdSubtitle: string;
  resumeProfessionalThirdDescription: string;
  resumeProfessionalFourthTitle: string;
  resumeProfessionalFourthSubtitle: string;
  resumeProfessionalFourthDescription: string;
  resumeUsedTechnologies: string;
  resumeLanguageTitle: string;
  resumeLanguageFirstTitle: string;
  resumeLanguageFirstSubtitle: string;
  resumeLanguageFirstDescription: string;
  resumeLanguageSecondTitle: string;
  resumeLanguageSecondSubtitle: string;
  resumeLanguageSecondDescription: string;
  resumeHardSkillTitle: string;
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

function CustomTabPanel(props: TabProps) {
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

export const PanelTabs = (props: PanelTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderSwitch = (value: number) => {
    const titles = [props.fistTab, props.secondTab, props.thirdTab];
    return (
      <Typography
        key={value}
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
    <>
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
            <Tab
              sx={{ fontSize: 11 }}
              label={props.fistTab}
              {...a11yProps(0)}
            />
            <Tab
              sx={{ fontSize: 11 }}
              label={props.secondTab}
              {...a11yProps(1)}
            />
            <Tab
              sx={{ fontSize: 11 }}
              label={props.thirdTab}
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
      </Grid>
      <CustomTabPanel value={value} index={0}>
        <AboutMe
          firstParagraph={props.aboutMeFirstParagraph}
          secondParagraph={props.aboutMeSecondParagraph}
          firstTopic={props.aboutMeFirstTopic}
          secondTopic={props.aboutMeSecondTopic}
          fistCardTitle={props.aboutMeFistCardTitle}
          thirdCardTitle={props.aboutMeThirdCardTitle}
          fistCard={props.aboutMeFistCard}
          secondCard={props.aboutMeScondCard}
          thirdCard={props.aboutMeThirdCard}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ResumeAcademic
          resumeAcademicTitle={props.resumeAcademicTitle}
          resumeAcademicFirstTitle={props.resumeAcademicFirstTitle}
          resumeAcademicFirstSubtitle={props.resumeAcademicFirstSubtitle}
          resumeAcademicFirstDescription={props.resumeAcademicFirstDescription}
          resumeAcademicSecondTitle={props.resumeAcademicSecondTitle}
          resumeAcademicSecondSubtitle={props.resumeAcademicSecondSubtitle}
          resumeAcademicSecondDescription={
            props.resumeAcademicSecondDescription
          }
        />
        <ResumeExperience
          resumeProfessionalTitle={props.resumeProfessionalTitle}
          resumeProfessionalFirstTitle={props.resumeProfessionalFirstTitle}
          resumeProfessionalFirstSubtitle={
            props.resumeProfessionalFirstSubtitle
          }
          resumeProfessionalFirstDescription={
            props.resumeProfessionalFirstDescription
          }
          resumeProfessionalSecondTitle={props.resumeProfessionalSecondTitle}
          resumeProfessionalSecondSubtitle={
            props.resumeProfessionalSecondSubtitle
          }
          resumeProfessionalSecondDescription={
            props.resumeProfessionalSecondDescription
          }
          resumeProfessionalThirdTitle={props.resumeProfessionalThirdTitle}
          resumeProfessionalThirdSubtitle={
            props.resumeProfessionalThirdSubtitle
          }
          resumeProfessionalThirdDescription={
            props.resumeProfessionalThirdDescription
          }
          resumeProfessionalFourthTitle={props.resumeProfessionalFirstTitle}
          resumeProfessionalFourthSubtitle={
            props.resumeProfessionalFirstSubtitle
          }
          resumeProfessionalFourthDescription={
            props.resumeProfessionalFirstDescription
          }
          resumeUsedTechnologies={props.resumeUsedTechnologies}
        />
        <ResumeLanguages
          resumeLanguageTitle={props.resumeLanguageTitle}
          resumeLanguageFirstTitle={props.resumeLanguageFirstTitle}
          resumeLanguageFirstSubtitle={props.resumeLanguageFirstSubtitle}
          resumeLanguageFirstDescription={props.resumeLanguageFirstDescription}
          resumeLanguageSecondTitle={props.resumeLanguageSecondTitle}
          resumeLanguageSecondSubtitle={props.resumeLanguageSecondSubtitle}
          resumeLanguageSecondDescription={
            props.resumeLanguageSecondDescription
          }
        />
        <ResumeSkills resumeHardSkillTitle={props.resumeHardSkillTitle} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TabProjects
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
          projectPersonalFirstTab={props.projectPersonalFirstTab}
          projectPersonalSecondTab={props.projectPersonalSecondTab}
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
