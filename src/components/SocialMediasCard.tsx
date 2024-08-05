import { Grid, IconButton } from "@mui/material";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
export const SocialMediasCard = () => {
  return (
    <>
      <Grid container justifyContent={"space-evenly"} marginBottom={2}>
        <IconButton
          href={""}
          target="_blank"
          aria-label="instagram"
          size="medium"
          sx={{
            "&:hover": {
              transform: "scale(1.4)",
              color: "#fff",
            },
          }}
        >
          <AiOutlineInstagram color="#f9a72e" className="btc-white" />
        </IconButton>
        <IconButton
          href={""}
          target="_blank"
          aria-label="linkedin"
          size="medium"
          sx={{
            "&:hover": {
              transform: "scale(1.4)",
            },
          }}
        >
          <AiOutlineLinkedin color="#f9a72e" className="btc-white" />
        </IconButton>
        <IconButton
          href={""}
          target="_blank"
          aria-label="whatsapp"
          size="medium"
          sx={{
            "&:hover": {
              transform: "scale(1.4)",
            },
          }}
        >
          <AiOutlineWhatsApp color="#f9a72e" className="btc-white"/>
        </IconButton>
      </Grid>
    </>
  );
};
