import { Grid, IconButton } from "@mui/material";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
export const SocialMediasCard = () => {
  const handleWhatsAppButtonClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5583996157313");
  };
  return (
    <>
      <Grid container justifyContent={"space-evenly"} marginBottom={2}>
        <IconButton
          href={"https://www.instagram.com/kelvinteixeira_/"}
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
          href={"https://www.linkedin.com/in/kelvin-teixeira-8707b41a8/"}
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
          onClick={handleWhatsAppButtonClick}
          target="_blank"
          aria-label="whatsapp"
          size="medium"
          sx={{
            "&:hover": {
              transform: "scale(1.4)",
            },
          }}
        >
          <AiOutlineWhatsApp color="#f9a72e" className="btc-white" />
        </IconButton>
      </Grid>
    </>
  );
};
