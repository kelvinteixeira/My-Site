import { Button, Grid } from "@mui/material";
import { PersonalCard } from "../components/PersonalCard";
import { Panel } from "../components/Panel";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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
      <img src="images/waves.svg" style={{ position: "absolute" }} />

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
          <Panel />
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
          <img src="/icons/language.svg" alt="" />
        </Button>
      </Grid>
    </>
  );
};
