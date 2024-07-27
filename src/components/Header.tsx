import { Button, Grid, useMediaQuery } from "@mui/material";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:817px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop > 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isTablet ? null : (
        <Grid
          container
          position={"fixed"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          height={isMobile ? 50 : isTablet ? 75 : 80}
          className={isScrolled ? "dark-header" : "normal-header"}
        >
          <Grid>
            <Button
              className={isScrolled ? "" : "seletor"}
              sx={{
                color: isScrolled ? "#000" : "#0D4081",
                fontWeight: isScrolled ? "bold" : "",
                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="bs-advogados" smooth={true} duration={500} offset={-50}>
                Sobre mim
              </Link>
            </Button>
           
            <Button
              sx={{
                color: isScrolled ? "#000" : "#0D4081",
                fontWeight: isScrolled ? "bold" : "",
                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="ourServices" smooth={true} duration={500} offset={-50}>
                Áreas de atuação
              </Link>
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#000" : "#0D4081",
                fontWeight: isScrolled ? "bold" : "",
                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="ourServices" smooth={true} duration={500} offset={-50}>
                Formação
              </Link>
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#000" : "#0D4081",
                fontWeight: isScrolled ? "bold" : "",
                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="contact" smooth={true} duration={500} offset={-50}>
                Mande uma mensagem
              </Link>
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};
