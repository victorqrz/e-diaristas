import SafeEnvironment from "ui/components/feedback/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua cidade"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />

          <Typography color={"error"}>CEP inválido</Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Victor Souza"}
              picture={"https://avatars.githubusercontent.com/u/38059087?v=4"}
              rating={4}
              description={"Aracaju"}
            />
            <UserInformation
              name={"Eduardo Costa"}
              picture={"https://avatars.githubusercontent.com/u/38059087?v=4"}
              rating={2}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Axl Rose"}
              picture={"https://avatars.githubusercontent.com/u/38059087?v=4"}
              rating={5}
              description={"Porto Velho"}
            />
            <UserInformation
              name={"Axl Rose"}
              picture={"https://avatars.githubusercontent.com/u/38059087?v=4"}
              rating={5}
              description={"Porto Velho"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
