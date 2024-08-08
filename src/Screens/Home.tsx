import { Button, Grid } from "@mui/material";
import { PersonalCard } from "../components/PersonalCard";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { PanelTabs } from "../components/PanelTabs";

export const Home = () => {
  const [value, setValue] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    setValue((prevValue: boolean) => !prevValue);
    const newLanguage = value ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <Grid container spacing={2} padding={5}>
        <Grid item xs={3}>
          <PersonalCard
            description={t("personalCardDescription")}
            phrase={t("personalCardPhrase")}
            subtitle={t("personalCardSubtitle")}
            country={t("personalCardCountry")}
          />
        </Grid>
        <Grid item xs={9}>
          <Grid
            className="glass"
            height={"100%"}
            padding={2}
            sx={{
              borderRadius: 5,
            }}
          >
            <PanelTabs
              fistTab={t("firstTab")}
              secondTab={t("secondTab")}
              thirdTab={t("thirdTab")}
              aboutMeFirstTopic={t("aboutMeFirstTopic")}
              aboutMeFirstParagraph={t("aboutMeFirstParagraph")}
              aboutMeSecondParagraph={t("aboutMeSecondParagraph")}
              aboutMeSecondTopic={t("aboutMeSecondTopic")}
              aboutMeFistCardTitle={t("aboutMeFirstCardTitle")}
              aboutMeFistCard={t("aboutMeFirstCard")}
              aboutMeScondCard={t("aboutMeSecondCard")}
              aboutMeThirdCardTitle={t("aboutMeThirdCardTitle")}
              aboutMeThirdCard={t("aboutMeThirdCard")}
              resumeAcademicTitle={t("resumeAcademicTitle")}
              resumeAcademicFirstTitle={t("resumeAcademicFirstTitle")}
              resumeAcademicFirstSubtitle={t("resumeAcademicFirstSubtitle")}
              resumeAcademicFirstDescription={t(
                "resumeAcademicFirstDescription"
              )}
              resumeAcademicSecondTitle={t("resumeAcademicSecondTitle")}
              resumeAcademicSecondSubtitle={t("resumeAcademicSecondSubtitle")}
              resumeAcademicSecondDescription={t(
                "resumeAcademicSecondDescription"
              )}
              resumeProfessionalTitle={t("resumeProfessionalTitle")}
              resumeProfessionalFirstTitle={t("resumeProfessionalFirstTitle")}
              resumeProfessionalFirstSubtitle={t(
                "resumeProfessionalFirstSubtitle"
              )}
              resumeProfessionalFirstDescription={t(
                "resumeProfessionalFirstDescription"
              )}
              resumeProfessionalSecondTitle={t("resumeProfessionalSecondTitle")}
              resumeProfessionalSecondSubtitle={t(
                "resumeProfessionalSecondSubtitle"
              )}
              resumeProfessionalSecondDescription={t(
                "resumeProfessionalSecondDescription"
              )}
              resumeProfessionalThirdTitle={t("resumeProfessionalThirdTitle")}
              resumeProfessionalThirdSubtitle={t(
                "resumeProfessionalThirdSubtitle"
              )}
              resumeProfessionalThirdDescription={t(
                "resumeProfessionalThirdDescription"
              )}
              resumeProfessionalFourthTitle={t("resumeProfessionalFourthTitle")}
              resumeProfessionalFourthSubtitle={t(
                "resumeProfessionalFourthSubtitle"
              )}
              resumeProfessionalFourthDescription={t(
                "resumeProfessionalFourthDescription"
              )}
              resumeUsedTechnologies={t("resumeUsedTechnologies")}
              resumeLanguageTitle={t("resumeLanguageTitle")}
              resumeLanguageFirstTitle={t("resumeLanguageFirstTitle")}
              resumeLanguageFirstSubtitle={t("resumeLanguageFirstSubtitle")}
              resumeLanguageFirstDescription={t(
                "resumeLanguageFirstDescription"
              )}
              resumeLanguageSecondTitle={t("resumeLanguageSecondTitle")}
              resumeLanguageSecondSubtitle={t("resumeLanguageSecondSubtitle")}
              resumeLanguageSecondDescription={t(
                "resumeLanguageSecondDescription"
              )}
              resumeHardSkillTitle={t("resumeHardSkillTitle")}
              projectPersonalFirstTab={t("projectPersonalFirstTab")}
              projectPersonalSecondTab={t("projectPersonalSecondTab")}
              projectPersonalFirstTitle={t("projectPersonalFirstTitle")}
              projectPersonalFirstIDescription={t(
                "projectPersonalFirstIDescription"
              )}
              projectPersonalFirstILink={t("projectPersonalFirstILink")}
              projectPersonalSecondTitle={t("projectPersonalSecondTitle")}
              projectPersonalSecondIDescription={t(
                "projectPersonalSecondIDescription"
              )}
              projectPersonalSecondILink={t("projectPersonalSecondILink")}
              projectProfessionalFirstTitle={t("projectProfessionalFirstTitle")}
              projectProfessionalFirstIDescription={t(
                "projectProfessionalFirstIDescription"
              )}
              projectProfessionalFirstILink={t("projectProfessionalFirstILink")}
              projectProfessionalSecondTitle={t(
                "projectProfessionalSecondTitle"
              )}
              projectProfessionalSecondIDescription={t(
                "projectProfessionalSecondIDescription"
              )}
              projectProfessionalSecondILink={t(
                "projectProfessionalSecondILink"
              )}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{ position: "absolute", top: 5, left: 5 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: 5,
            bgcolor: "#111111",
          }}
          onClick={changeLanguage}
        >
          <img src="/icons/multilanguage.svg" alt="" />
        </Button>
      </Grid>
    </>
  );
};
