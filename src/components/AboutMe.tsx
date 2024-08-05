import { Grid, Typography } from "@mui/material";

export const AboutMe = () => {
  return (
    <>
      <Typography fontSize={25} fontWeight={"bolder"} marginBottom={2}>
        Quem sou eu
      </Typography>
      <Typography align="justify" color={"grey"} fontSize={15} marginBottom={2}>
        Eu sou um criativo aventureiro desbravando a área de programação e todas
        as belezes de suas melhores tecnologias, tenho 31 anos, por enquanto até
        eu vim atualizar esse texto e desenvolvo a cerca de 3 anos, por mais que
        eu seja um dev full stack, eu atuo principalemente no Frontend.
      </Typography>
      <Typography align="justify" color={"grey"} fontSize={15} marginBottom={2}>
        Trabalho especialmente com React, Typescript e NextJS em projetos
        monolíticos e micro aplicações empresariais e/ou pessoais, com objetivo
        em me comprometer com a empresa ou cliente para desenvolver seu sistema
        da forma que foi requisitada, e sempre com o intuito de organizar,
        ajudar e agregar valor de negócio.
      </Typography>
      <Typography fontSize={25} fontWeight={"bolder"} marginBottom={4}>
        O que eu faço
      </Typography>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
        xs={12}
        className="glass"
        marginBottom={2}
        sx={{
          borderRadius: 5,
        }}
      >
        <Grid item xs={1}>
          <img
            src="icons/dev.svg"
            style={{ width: 40 }}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography>Desenvolvimento web</Typography>
          <Typography fontSize={12} color={"grey"} align="justify">
            Desenvolver sites com as mais atualizadas e melhores tecnologias do
            mercado em nivel profissional e com alta qualidade.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
        xs={12}
        className="glass"
        marginBottom={2}
        sx={{
          borderRadius: 5,
        }}
      >
        <Grid item xs={1}>
          <img src="icons/design.svg" style={{ width: 40 }} />
        </Grid>
        <Grid item xs={9}>
          <Typography>Web Design</Typography>
          <Typography fontSize={12} color={"grey"} align="justify">
            Criar layouts e intercefaces seguindo os atuais padrões mais
            mordernos e atualizados do mercado em nivel profissional e com alta qualidade.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
        xs={12}
        className="glass"
        marginBottom={2}
        sx={{
          borderRadius: 5,
        }}
      >
        <Grid item xs={1}>
          <img src="icons/app.svg" style={{ width: 40 }} />
        </Grid>
        <Grid item xs={9}>
          <Typography>Desenvolvimento mobile</Typography>
          <Typography fontSize={12} color={"grey"} align="justify">
            Desenvolver aplicacções mobile com as mais atualizadas e melhores
            tecnologias do mercado em nivel profissional e com alta qualidade.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
